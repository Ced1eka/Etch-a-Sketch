const containerDiv = document.querySelector('.container');

const sizeOfGrid = prompt("How many square?", 0);
const squareSize = ((960 / Number(sizeOfGrid)) - 0.5 ) + 'px';


      for (let i = 0; i < sizeOfGrid * sizeOfGrid; i++ ){
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'square');
            newDiv.style.width = squareSize;
            newDiv.style.height = squareSize;
            // newDiv.textContent = `${i+1}`;
            containerDiv.appendChild(newDiv);


      }
