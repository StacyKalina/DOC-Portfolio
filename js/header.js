function initHeader() {
  const overlay = document.querySelector(".header__overlay");
  const menuButton = document.querySelector(".header__menu-button");
  const closeButton = document.querySelector(".header__close-button");

  const homeLinks = document.querySelectorAll(
    ".header__logo, .header__overlay-logo, #home-link",
  );

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

    setTimeout(() => {
      overlay.classList.remove("is-open");
    }, 1100);
  }

  menuButton.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
    } else {
      overlay.classList.add("is-open");
      document.body.classList.add("menu-open");
    }
  });

  closeButton.addEventListener("click", closeMenu);
}
