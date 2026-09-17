const products = [
  {name:"Кета теша х/к", cat:"hk", price:"по прайсу", weight:"кг", icon:"🐟"},
  {name:"Кета филе х/к", cat:"hk", price:"по прайсу", weight:"кг", icon:"🐟"},
  {name:"Кета филе-кусочки с луком", cat:"snack", price:"по прайсу", weight:"ведро 1,5 кг", icon:"🐟"},
  {name:"Скумбрия спинка х/к", cat:"hk", price:"по прайсу", weight:"кг", icon:"🐟"},
  {name:"Кета спинка х/к", cat:"hk", price:"по прайсу", weight:"кг", icon:"🐟"},
  {name:"Корюшка мелкая", cat:"vial", price:"по прайсу", weight:"кг", icon:"🐟"},
  {name:"Мойва х/к", cat:"hk", price:"по прайсу", weight:"кг", icon:"🐟"},
  {name:"Пелядь вяленая", cat:"vial", price:"по прайсу", weight:"кг", icon:"🐟"},
  {name:"Креветка х/к", cat:"hk", price:"по прайсу", weight:"кг", icon:"🦐"},
  {name:"Кальмар в масле с чесноком", cat:"snack", price:"1 600 ₽", weight:"ведро 1 кг", icon:"🦑"},
  {name:"Сёмга бутербродная", cat:"salt", price:"3 000 ₽", weight:"ведро 1,5 кг", icon:"🐟"},
  {name:"Салат рыбный", cat:"snack", price:"по прайсу", weight:"шт", icon:"🥗"}
];

const labels = {hk:"Холодного копчения", vial:"Вяленая", salt:"Слабосолёная", snack:"Салаты и снэки"};

const grid = document.querySelector("#products");

function render(category="all"){
  grid.innerHTML = products
    .filter(p => category==="all" || p.cat===category)
    .map(p => `
      <article class="product">
        <div class="product-img"><span>${p.icon} фото товара</span></div>
        <div class="product-body">
          <div class="product-cat">${labels[p.cat]}</div>
          <h3>${p.name}</h3>
          <div class="product-bottom">
            <div class="price">${p.price}</div>
            <div class="weight">${p.weight}</div>
          </div>
        </div>
      </article>`).join("");
}

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.category);
  });
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click",()=>document.querySelector(".nav").classList.remove("open"));
});

document.querySelector("#routeBtn").addEventListener("click",(e)=>{
  e.preventDefault();
  alert("Добавьте в script.js ссылку на Яндекс Карты или 2ГИС вашего магазина.");
});

render();
