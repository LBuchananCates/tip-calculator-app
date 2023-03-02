// get inputs
const billInput = document.getElementById("bill-input");
const peopleInput = document.querySelector(".num-people-input");

parseFloat(billInput.value);
let numPeople = peopleInput.value;

// get tips
const tips = document.querySelector(".tip");
const customTip = document.querySelector(".custom-tip");

// get prices
const tipPerPerson = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-bill-amount");

// show error message with add/remove classes
const errorMsg = document.querySelector(".error-message");

// get reset button
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", function () {
  billInput.value = "";
  customTip.value = "";
  peopleInput.value = "";
});
