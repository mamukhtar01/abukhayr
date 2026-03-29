const MENU = [
  { title: "Chicken Sandwiches", icon: "🥪", img: "images/Grilled-Chicken-Sandwich-Recipe1.jpg", description: "Fresh grilled chicken in soft bread." },
  { title: "Meat Sandwiches", icon: "🥩", img: "images/Meat Sandwich.jpg", description: "Tender meat sandwiches with bold flavor." },
  { title: "Tuna Sandwiches", icon: "🐟", img: "images/Tuna Sandwich.jpg", description: "Light and tasty tuna made fresh." },
  { title: "Organic Juices", icon: "🥤", img: "images/orange.jpg", description: "Natural fruit juices." },
  { title: "Coffee and Tea", icon: "☕", img: "images/coffee.png", description: "Hot drinks for every mood." },
  { title: "Mini Pancakes", icon: "🥞", img: "images/minipancakes2.png", description: "Soft mini pancakes with sweet toppings." },
  { title: "Waffles", icon: "🧇", img: "images/pancake.jpg", description: "Crispy waffles with rich taste." },
  { title: "Crepes", icon: "🍯", img: "images/crepe2.webp", description: "Thin crepes with your favorite filling." },
  { title: "Basbousa", icon: "🍰", img: "images/basbousa.jpg", description: "Delicious basbousa, soft and sweet." },
];

function renderMenu(){
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  MENU.forEach((c) => {
    const article = document.createElement("article");
    article.className = "menu-card reveal";
    article.innerHTML = `
      <img class="menu-card__img" src="${c.img}" alt="${c.title}" loading="lazy" decoding="async" />
      <div class="menu-card__body">
        <div class="menu-card__title">
          <h3>${c.title}</h3>
          <div class="menu-card__icon" aria-hidden="true">${c.icon}</div>
        </div>
        <p class="muted">${c.description}</p>
      </div>
    `;
    grid.appendChild(article);
  });
}

function initNav(){
  const btn = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!btn || !links) return;

  const close = () => {
    links.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initReveal(){
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
}

function initYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

renderMenu();
initNav();
initYear();
initReveal();