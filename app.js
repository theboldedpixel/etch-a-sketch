

// Color palette

const blueMain = '#191970';
const purpleMain = '#451970';
const greenMain = '#197019';
const blueTint = '#dfdff8';
const pinkMain = '#f4cfcf';
const yellowMain = '#f4f4cf';

let color = blueMain;


// Color Palette event listeners
const listenBlue = document.querySelector('.blue');
const listenPurple = document.querySelector('.purple');
const listenGreen = document.querySelector('.green');
const listenTint = document.querySelector('.lightblue');
const listenPink = document.querySelector('.pink');
const listenYellow = document.querySelector('.yellow');

listenBlue.addEventListener('click', () => color = blueMain);
listenPurple.addEventListener('click', () => color = purpleMain);
listenGreen.addEventListener('click', () => color = greenMain);
listenTint.addEventListener('click', () => color = blueTint);
listenPink.addEventListener('click', () => color = pinkMain);
listenYellow.addEventListener('click', () => color = yellowMain);


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
    selectContainer.appendChild(newDiv);
    let colorThis = document.querySelectorAll('.colorThis');
    colorThis.forEach((div) => {
      div.addEventListener('mouseover', clickedDown);
      div.addEventListener('click', (e) => {
        e.target.style.background = color;
      })
      });
      }
    }
  
let clicked = false;



function clickedDown(e) {
  if(clicked === true) {
    e.target.style.background = color;;
    // e.target.setAttribute('style', 'background: #191970; border: #d4af37 2px solid; box-sizing: border-box;')
  }
}

function setClickedTrue() {
  clicked = true;
}

function setClickedFalse() {
  clicked = false;
}

selectContainer.addEventListener('mousedown', setClickedTrue);
window.addEventListener('mouseup', setClickedFalse);


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