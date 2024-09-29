let bill = document.querySelector("#bill");
let customTip = document.querySelector("#custom-tip");
let people = document.querySelector("#people");

let tipAmountElement = document.querySelector("#tipAmount");
let totalAmountElement = document.querySelector("#totalAmount");
let totalPerPersonElement = document.querySelector("#totalPerPerson");

let resetBtn = document.querySelector(".resetBtn");
let selectTips = document.querySelectorAll(".select-tip");

let selectedTip = null;

function calculateBill() {

  let billAmount = Math.max(Number(bill.value), 0); 
  let numberOfPeople = Math.max(Number(people.value), 1); 
  

  let tip = selectedTip !== null ? selectedTip : Math.max(Number(customTip.value), 0)

  let tipAmount = (billAmount * tip) / numberOfPeople / 100;
  let totalAmount = billAmount + tipAmount * numberOfPeople;
  let totalPerPerson = totalAmount / numberOfPeople;

  tipAmountElement.innerHTML = tipAmount.toFixed(2) + " $";
  totalAmountElement.innerHTML = totalAmount.toFixed(2) + " $";
  totalPerPersonElement.innerHTML = totalPerPerson.toFixed(2) + " $";
}

function reset() {
  bill.value = "";
  customTip.value = "";
  people.value = "";
  selectedTip = null;
  tipAmountElement.innerHTML = "0.00 $";
  totalAmountElement.innerHTML = "0.00 $";
  totalPerPersonElement.innerHTML = "0.00 $";
}

function handleTipClick(event) {
  selectedTip = Number(event.target.value.replace("%", ""));
  calculateBill();
}

bill.addEventListener("input", calculateBill);
people.addEventListener("input", calculateBill);

customTip.addEventListener("input", () => {
  selectedTip = Math.max(Number(customTip.value), 0);
  calculateBill();
});

selectTips.forEach((button) => {
  button.addEventListener("click", handleTipClick);
});

resetBtn.addEventListener("click", reset);

function handleTipClick(event) {
  selectTips.forEach((button) => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");

  selectedTip = Number(event.target.value.replace("%", ""));

  calculateBill();
}
