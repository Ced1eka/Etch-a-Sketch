const containerDiv = document.querySelector('.container');


for (let i = 0; i < 256; i++ ){
      const newDiv = document.createElement('div');
      newDiv.textContent = `${i+1}`;
      containerDiv.appendChild(newDiv);


}