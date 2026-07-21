const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const languageButton = document.querySelector("#language-toggle");
const heroSection = document.querySelector(".hero-section");
const heroImage = document.querySelector(".hero-background");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");

  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

let currentLanguage = "fr";

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "fr" ? "ar" : "fr";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  languageButton.textContent =
    currentLanguage === "fr" ? "العربية" : "Français";

  document.querySelectorAll("[data-fr][data-ar]").forEach((element) => {
    element.textContent = element.dataset[currentLanguage];
  });
});

const hideMissingHero = () => {
  heroImage.hidden = true;
  heroSection.classList.add("no-hero-image");
};

heroImage.addEventListener("error", hideMissingHero);

if (heroImage.complete && heroImage.naturalWidth === 0) {
  hideMissingHero();
}

document.querySelectorAll("[data-placeholder] img").forEach((image) => {
  const container = image.closest("[data-placeholder]");

  const showPlaceholder = () => {
    image.hidden = true;
    container.classList.add("image-missing");
  };

  image.addEventListener("error", showPlaceholder);

  if (image.complete && image.naturalWidth === 0) {
    showPlaceholder();
  }
});
