const languageToggle = document.querySelector("#language-toggle");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");

let arabicMode = false;

languageToggle.addEventListener("click", () => {
  arabicMode = !arabicMode;

  document.documentElement.lang = arabicMode ? "ar" : "fr";
  document.body.dir = arabicMode ? "rtl" : "ltr";

  languageToggle.textContent = arabicMode ? "Français" : "العربية";

  if (arabicMode) {
    document.querySelector(".eyebrow").textContent = "مخبزة وحلويات عائلية";
    document.querySelector("h1").textContent =
      "حلويات تحضر يومياً بكل حب وعناية";
    document.querySelector(".hero-text").textContent =
      "حلويات تقليدية وعصرية نحضرها بكميات صغيرة للحفاظ على الط freshness والجودة والمذاق المنزلي.";
  } else {
    document.querySelector(".eyebrow").textContent =
      "BOULANGERIE-PÂTISSERIE FAMILIALE";
    document.querySelector("h1").textContent =
      "Des douceurs préparées chaque jour avec soin";
    document.querySelector(".hero-text").textContent =
      "Des pâtisseries traditionnelles et modernes, préparées en petites quantités pour préserver la fraîcheur, la qualité et le goût fait maison.";
  }
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("mobile-visible");
});
