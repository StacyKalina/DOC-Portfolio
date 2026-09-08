const intro = document.querySelector(".intro");

const skipIntro = sessionStorage.getItem("skipIntro");

if (skipIntro === "true") {
  intro.style.display = "none";
  sessionStorage.removeItem("skipIntro");
} else {
  setTimeout(() => {
    intro.classList.add("intro--hide");
  }, 1700);
}
