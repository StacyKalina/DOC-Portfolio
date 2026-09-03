const chessBack = document.querySelector(".aboutAs__chessBack");
console.log(chessBack);

for (let i = 1; i <= 500; i++) {
  const cell = document.createElement("div");
  cell.classList.add("aboutAs__cell");
  chessBack.appendChild(cell);

  cell.style.opacity = Math.random();
}

const allCells = document.querySelectorAll(".aboutAs__cell");
console.log(allCells);

// allCells.forEach((cell) => {
//   console.log(cell);
// });

function changeOpacity() {
  allCells.forEach((cell) => {
    cell.style.opacity = Math.random();
  });
}
