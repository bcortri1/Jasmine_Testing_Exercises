
it('should calculate the monthly payment correctly', function () {
  
  let values = {amount: 0, rate: 1,years: 1};
  expect(calculateMonthlyPayment(values)).toEqual('0.00');

  values = {amount: 1000, rate: 10,years: 0};
  expect(calculateMonthlyPayment(values)).toEqual('1000.00');

  values = {amount: 1000, rate: 0,years: 10};
  expect(calculateMonthlyPayment(values)).toEqual('8.33');

  values = {amount: 10000, rate: 4.5,years: 1};
  expect(calculateMonthlyPayment(values)).toEqual('3833.95');


});


it("should return a result with 2 decimal places", function() {
//redundant
  values = {amount: 10000, rate: 10,years: 15};
  expect(calculateMonthlyPayment(values)).toEqual('8333.33');
});

