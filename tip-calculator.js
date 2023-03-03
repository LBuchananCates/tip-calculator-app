// get inputs
const billInput = document.getElementById("bill-input");
const peopleInput = document.querySelector(".num-people-input");

// get tips (buttons)
const tips = document.querySelectorAll(".tip");
const customTip = document.querySelector(".custom-tip");

// get prices
const tipPerPerson = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-per-person");

// show error message with add/remove classes
const errorMsg = document.querySelector(".error-message");

// get bill amount
let billAmount;
billInput.addEventListener("input", function () {
  billAmount = parseFloat(billInput.value).toFixed(2);
});

// each tip btn needs event listener
let tipAmount;
for (const tipBtn of tips) {
  tipBtn.addEventListener("click", function () {
    tipAmount = parseFloat(tipBtn.innerHTML / 100).toFixed(2);
    // console.log(`Tip amount is $${billAmount * tipAmount}`);
  });
}

// get ppl num
let peopleAmount;
peopleInput.addEventListener("input", function () {
  peopleAmount = peopleInput.value;
  // get tip per person
  let tipAmtWithBill = billAmount * tipAmount;
  let tipAmtPerPerson = parseFloat(tipAmtWithBill / peopleAmount).toFixed(2);
  tipPerPerson.innerHTML = tipAmtPerPerson;
  //   console.log(`Tip amount is $${tipAmtPerPerson} per person`);

  let totalBill = billAmount / peopleAmount;
  totalPerPerson.innerHTML = parseFloat(totalBill).toFixed(2);
  //   console.log(`Total bill amount is $${totalBill} per person`);
});

// get reset button DONE
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetForm);
function resetForm() {
  billInput.value = "";
  peopleInput.value = "";
  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
}
