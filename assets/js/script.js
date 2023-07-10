'use strict';

const accordion = document.getElementsByClassName('container');

for (let i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    // Show/hide the content of the accordion item
    this.classList.toggle('active');

    let curLabel = document.getElementById(`label-${i}`);
    let curArrow = document.getElementById(`down-arrow${i}`);

    curArrow.classList.toggle('rotate');

    if(curLabel.style.fontWeight !== "700") {
        curLabel.style.fontWeight = "700";
    } else {
        curLabel.style.fontWeight = "400";
    }
  })
}