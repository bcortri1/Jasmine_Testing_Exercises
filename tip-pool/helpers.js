
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    
    let payment = allPayments[key];
    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

//Adds delete button that removes parent object
function appendDeleteBtn(tr) {
  let newBtn = document.createElement('BUTTON');
  newBtn.innerText = 'X';
  newBtn.addEventListener('click',function(evt){
    evt.preventDefault();
    if(evt.target.parentNode.id.includes("payment")){
      delete allPayments[evt.target.parentNode.id];
    }

    else {
      delete allServers[evt.target.parentNode.id];
      updateServerTable()
    };
    evt.target.parentNode.remove();
    updateSummary();
  });
  tr.append(newBtn);
}
// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
  
}

