const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero__image");

console.log("heroGallery loaded");
console.log("hero:", hero);
console.log("heroImage:", heroImage);

const images = [
  {
    src: "./images/portfolio/web_Waterland/5.jpg",
    x: 20,
    y: 20,
  },
  {
    src: "./images/portfolio/web_Waterland/1.jpg",
    x: 80,
    y: 20,
  },
  {
    src: "./images/portfolio/web_Waterland/2.jpg",
    x: 50,
    y: 50,
  },
  {
    src: "./images/portfolio/web_Waterland/3.jpg",
    x: 20,
    y: 80,
  },
  {
    src: "./images/portfolio/web_Waterland/6.jpg",
    x: 80,
    y: 80,
  },
];

let currentImage = images[0];

images.forEach((image) => {
  const preloadImage = new Image();
  preloadImage.src = image.src;
});

hero.addEventListener("pointermove", (event) => {
  const rect = hero.getBoundingClientRect();

  const mouseX = ((event.clientX - rect.left) / rect.width) * 100;
  const mouseY = ((event.clientY - rect.top) / rect.height) * 100;

  let closestImage = images[0];
  let closestDistance = Infinity;

  images.forEach((image) => {
    const distanceX = mouseX - image.x;
    const distanceY = mouseY - image.y;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestImage = image;
    }
  });

  if (closestImage !== currentImage) {
    currentImage = closestImage;
    heroImage.src = closestImage.src;
  }
});
