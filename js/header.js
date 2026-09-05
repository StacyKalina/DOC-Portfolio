const overlay = document.querySelector(".header__overlay");

overlay.addEventListener("pointermove", (event) => {
  const rect = overlay.getBoundingClientRect();

  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  overlay.style.setProperty("--glow-x", `${x}%`);
  overlay.style.setProperty("--glow-y", `${y}%`);
});
