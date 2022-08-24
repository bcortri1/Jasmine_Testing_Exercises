window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let interest = values.rate/12;
  let n = values.years*12;
  let payment = (principle*interest)/1-((1+interest)^-n)
  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText ="$" + monthly.toFixed(2);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 15;
  document.getElementById("loan-rate").value = 10;
  update();
}