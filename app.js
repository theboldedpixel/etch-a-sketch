// Create divs

const selectContainer = document.querySelector('.container');
// const addDivClass = makeDiv.classList.add(i);


let divList = [];

function addToDivList(num) {
  for (i = 0; i < num; i++) {
    divList.push(i);
  }
}

function createDivs() {
  for (i = 0; i < divList.length; i++) {
    let newDiv = document.createElement('div');
    // divIdName = i;
    // newDiv.setAttribute('id', divIdName);
    newDiv.classList.add(i);
    selectContainer.appendChild(newDiv);
  }
  

