function initHeader() {
  const overlay = document.querySelector(".header__overlay");
  const menuButton = document.querySelector(".header__menu-button");
  const menuText = document.querySelector(".header__menu-text");
  const contactButton = document.querySelector(".header__contact");
  const languageSwitcher = document.querySelector(".header__language-switcher");
  const languageButton = document.querySelector(".header__language-button");

  const languageOptions = document.querySelectorAll(
    ".header__language-menu button",
  );

  const homeLinks = document.querySelectorAll(
    ".header__logo, .header__overlay-logo, #home-link",
  );

  if (document.body.classList.contains("body-contact-page")) {
    contactButton.textContent = "PROJECTS";
    contactButton.href = "./index.html";
  }

  homeLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sessionStorage.setItem("skipIntro", "true");
    });
  });

  overlay.addEventListener("pointermove", (event) => {
    const rect = overlay.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    overlay.style.setProperty("--glow-x", `${x}%`);
    overlay.style.setProperty("--glow-y", `${y}%`);
  });

  function closeMenu() {
    document.body.classList.remove("menu-open");
    menuText.textContent = "MENU";
    languageSwitcher.classList.remove("is-open");

    setTimeout(() => {
      overlay.classList.remove("is-open");
    }, 1100);
  }

  languageButton.addEventListener("click", () => {
    languageSwitcher.classList.toggle("is-open");
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      languageButton.textContent = option.textContent;
      languageSwitcher.classList.remove("is-open");
    });
  });

  menuButton.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
    } else {
      overlay.classList.add("is-open");
      document.body.classList.add("menu-open");
      document.body.classList.add("scroll-locked");
      menuText.textContent = "CLOSE";
    }
  });
}
