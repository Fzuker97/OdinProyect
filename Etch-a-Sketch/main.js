//Get the grid container.
let gridSize = document.querySelector('#slider');
let gridSizeBig = document.querySelector('#sliderbig');
const gridContainer = document.querySelector('.gridContainer');
let cells = [];

//Create 16x16 grid cells.

function createGrid() {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


    for(let i = 0; i < gridSize.value * gridSize.value; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cells.push(cell);
        gridContainer.appendChild(cell);
    }
}

// EVENTS
function setDrawingEvents() {
    cells.forEach(cell => {
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
      });
    });
  }

  // RESET BTN
  function resetGrid() {
    cells.forEach(cell => {
      cell.style.backgroundColor = 'white';
    });
  }

  
  createGrid();
  setDrawingEvents();

  // EVENT RESET
  document.addEventListener('click', resetGrid);


  //RGB BTN

  function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const rgb = document.querySelector('#rgb');
  rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = gridContainer.children;
    for( let i = 0; i < val*val; i++){
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
  })

// BLACK BTN

  const black = document.querySelector('#black');
    black.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = gridContainer.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

//CHOOSE COLOR BAR

const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color'). value;
    let cell = gridContainer.children;
    for(let i = 0; i < val*val; i++){
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
})


function createBigGrid(){
  gridContainer.style.gridTemplateColumns = `repeat(${gridSizeBig}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSizeBig}, 1fr)`;

  for(let i = 0; i < gridSizeBig.value * gridSizeBig.value; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cells.push(cell);
    gridContainer.appendChild(cell);
  }
}