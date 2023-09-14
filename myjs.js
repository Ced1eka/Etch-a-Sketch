const containerDiv = document.querySelector(".container");

// const sizeOfGrid = prompt("How many square?", 2);
// const squareSize = 960 / Number(sizeOfGrid) - 1 + "px";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const sizeOfGrid = prompt("How many square?", 2);
  const squareSize = 960 / Number(sizeOfGrid) - 1 + "px";
  clearGrid();
  generateGrid(sizeOfGrid, squareSize);
});

button.addEventListener("mouseover", () => {
  const button = document.querySelector("button");
  button.classList.add("button-clicked");
});
button.addEventListener("mouseout", () => {
  const button = document.querySelector("button");
  button.classList.remove("button-clicked");
});

const generateGrid = (sizeOfGrid, squareSize) => {
  for (let i = 0; i < sizeOfGrid * sizeOfGrid; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    newDiv.style.width = squareSize;
    newDiv.style.height = squareSize;
    // newDiv.textContent = `${i+1}`;
    containerDiv.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
      const randomColor = getRandomRGBColor();
      newDiv.style.backgroundColor = randomColor;
    });
  }
};

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); // Red component (0-255)
  const g = Math.floor(Math.random() * 256); // Green component (0-255)
  const b = Math.floor(Math.random() * 256); // Blue component (0-255)
  return `rgb(${r},${g},${b})`; // Return the RGB color as a string
}

function clearGrid() {

      while(containerDiv.firstChild){
            containerDiv.removeChild(containerDiv.firstChild);
      }
}