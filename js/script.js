/* ASTRA : interactions en JavaScript natif, sans bibliothèque. */

// 1. Menu sur petit écran
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("main-menu");
if (menuButton && menu) {
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", menu.classList.contains("open") ? "true" : "false");
  });
  // Accessibilité : la touche Échap referme le menu et rend le focus au bouton
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });
}

// 2. Destination aléatoire sur la page d'accueil
const randomButton = document.getElementById("random-button");
const randomOutput = document.getElementById("random-output");
if (randomButton && randomOutput) {
  const destinations = ["Mercure", "Vénus", "Terre", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune"];
  randomButton.addEventListener("click", function () {
    const indice = Math.floor(Math.random() * destinations.length);
    randomOutput.textContent = "Votre destination : " + destinations[indice] + " !";
  });
}

// 3. Filtres et recherche dans le catalogue des planètes
const filters = document.querySelectorAll(".filter");
const searchInput = document.getElementById("planet-search");
const planetCards = document.querySelectorAll(".planet-card");
const emptyState = document.getElementById("empty-state");
const countLabel = document.getElementById("planet-count");
let activeFilter = "toutes";

// Retire les accents et met en minuscules, pour que "venus" trouve "Vénus"
function sansAccents(texte) {
  return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function updatePlanets() {
  if (!searchInput) return;
  const searchText = sansAccents(searchInput.value.trim());
  let visibleCount = 0;
  planetCards.forEach(function (card) {
    const category = card.getAttribute("data-category");
    const name = card.getAttribute("data-name");
    const matchesCategory = activeFilter === "toutes" || category === activeFilter;
    const matchesText = sansAccents(name).includes(searchText);
    if (matchesCategory && matchesText) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });
  if (emptyState) emptyState.style.display = visibleCount === 0 ? "block" : "none";
  if (countLabel) countLabel.textContent = visibleCount + " planète(s) affichée(s)";
}

filters.forEach(function (button) {
  button.addEventListener("click", function () {
    activeFilter = button.getAttribute("data-filter");
    filters.forEach(function (other) { other.classList.remove("active"); });
    button.classList.add("active");
    updatePlanets();
  });
});
if (searchInput) searchInput.addEventListener("input", updatePlanets);

// 4. Quiz : on compte les réponses correctes à la soumission
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");
if (quizForm && quizResult) {
  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const solutions = ["b", "a", "c", "b", "a"];
    let score = 0;
    let reponses = 0;
    for (let i = 0; i < solutions.length; i++) {
      const choix = quizForm.querySelector('input[name="q' + (i + 1) + '"]:checked');
      if (choix) {
        reponses++;
        if (choix.value === solutions[i]) score++;
      }
    }
    quizResult.style.display = "block";
    if (reponses < solutions.length) {
      quizResult.textContent = "Réponds aux 5 questions pour obtenir ton score.";
    } else {
      quizResult.textContent = "Résultat : " + score + "/5. " + (score >= 4 ? "Excellent, mission accomplie !" : "Continue ton exploration et retente le quiz !");
    }
  });
}

// 5. Validation simple du formulaire (démonstration sans serveur)
const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");
if (contactForm && contactSuccess) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
      contactSuccess.style.display = "block";
      contactSuccess.textContent = "Merci de renseigner un nom, un e-mail valide et un message d'au moins 10 caractères.";
    } else {
      contactSuccess.style.display = "block";
      contactSuccess.textContent = "Message validé ! Ceci est une démonstration : aucune donnée n'a été envoyée.";
      contactForm.reset();
    }
  });
}
