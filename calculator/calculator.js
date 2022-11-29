//looked at solution now the code base make sense. 
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) { 
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();   //will update the values on click
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
//return - > {amount: 30000, years: 12, rate: 2500} <- created obj
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // let input1 = document.querySelector('#loan-amount')
  // let input2 =  document.querySelector('#loan-years')
  // let input3 =  document.querySelector('#loan-rate')

  // input1.value = 30000;
  // input2.value = 12;
  // input3.value = 2500;   //initial values set, bcomes return of getCurrentValue
  //return an obj literal
  const values  = { amount: 14000, years: 10, rate: 4.5 };  //obj with data to plug in
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount; //extracted from obj
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  //{amount: 10000, years: 10, rate: 4.5} 
                      //vv
  const currentVals = getCurrentUIValues();
  console.log(currentVals)  //pass in returned obj from func()
  updateMonthly(calculateMonthlyPayment(currentVals));
  //^ pass in initial values into calculate func()
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //using provided equation to calculare loan
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly; //set innner text of span to 
  //concatenated result
  
}


