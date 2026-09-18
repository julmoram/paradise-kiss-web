/**
 * Renders the cast grid from CHARACTERS (see data.js), wires up the
 * category filters, and powers the character detail modal.
 * Any image path that fails to load falls back to a monogram card,
 * so the page works before you've added your own art.
 */

const grid = document.getElementById("cast-grid");
const filterButtons = document.querySelectorAll(".filter");
const modal = document.getElementById("modal");

function monogram(name) {
  return name.charAt(0);
}

function renderCard(character) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.category = character.category;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View ${character.name}`);

  card.innerHTML = `
    <div class="card__photo">
      <img
        src="${character.image}"
        alt="${character.name}"
        onerror="this.replaceWith(Object.assign(document.createElement('span'), {className:'card__monogram', textContent:'${monogram(character.name)}'}))"
      >
    </div>
    <span class="card__label">${character.categoryLabel}</span>
    <h3 class="card__name">${character.name}</h3>
    <p class="card__title">${character.title}</p>
  `;

  const open = () => openModal(character);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });

  return card;
}

function renderGrid(filter = "all") {
  grid.innerHTML = "";
  CHARACTERS
    .filter((c) => filter === "all" || c.category === filter)
    .forEach((c) => grid.appendChild(renderCard(c)));
}

function openModal(character) {
  document.getElementById("modal-category").textContent = character.categoryLabel;
  document.getElementById("modal-name").textContent = character.name;
  document.getElementById("modal-title").textContent = character.title;
  document.getElementById("modal-bio").textContent = character.bio;
  document.getElementById("modal-quote").textContent = `"${character.quote}"`;

  const photoBox = document.getElementById("modal-photo");
  photoBox.innerHTML = `
    <img
      src="${character.image}"
      alt="${character.name}"
      onerror="this.replaceWith(Object.assign(document.createElement('span'), {className:'card__monogram', textContent:'${monogram(character.name)}'}))"
    >
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modal.querySelectorAll("[data-close]").forEach((el) =>
  el.addEventListener("click", closeModal)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid(btn.dataset.filter);
  });
});

renderGrid();
