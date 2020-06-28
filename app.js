



// Create divs

const selectContainer = document.querySelector('.container');

let divList = [];

function addToDivList(num) {
  for (i = 0; i < num; i++) {
    divList.push(i);
  }
}


function createDivs() {
  for (i = 0; i < divList.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('colorThis');
    newDiv.classList.add(i);
    selectContainer.appendChild(newDiv);
    let colorThis = document.querySelectorAll('.colorThis');
    colorThis.forEach((div) => {
      div.addEventListener('mouseover', (e) => {
        e.target.style.background = '#191970';
      })
    })
    }
  }


 let reset = document.querySelector('.reset');

function resetDivColors() {
  let colorThis = document.querySelectorAll('.colorThis');
    colorThis.forEach((div) => {
      div.style.background = 'darkgray';
    });
}

reset.addEventListener('click', () => {
  resetDivColors();
});

function deleteDivs() {
  for (i = 0; i < divList.length; i++) {
    let element = document.querySelector('.colorThis');
    selectContainer.removeChild(element);
  }
}

function emptyList() {
  divList = [];
}

function mediumGrid() {
  selectContainer.style.gridTemplateColumns = 'repeat(8, 1fr';
}

function makeMediumGrid() {
  deleteDivs();
  emptyList();
  mediumGrid();
  addToDivList(64);
  createDivs();
}

function makeSmallGrid() {
  deleteDivs();
  emptyList();
  smallGrid(); 
  addToDivList(16);
  createDivs();
}

function makeBigGrid() {
  deleteDivs();
  emptyList();
  bigGrid();
  addToDivList(256);
  createDivs();
}

function bigGrid() {
  selectContainer.style.gridTemplateColumns = 'repeat(16, 1fr';
}

function smallGrid() {
  selectContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
}

const smallButton = document.querySelector('.small');
const mediumButton = document.querySelector('.medium');
const bigButton = document.querySelector('.big');


smallButton.addEventListener('click', (makeSmallGrid));

mediumButton.addEventListener('click', (makeMediumGrid));
bigButton.addEventListener('click', (makeBigGrid));

makeMediumGrid();