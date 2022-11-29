
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,    //testing initial values
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
  //expect func() looks for func() calculareMonthlyPayment to result in 130.44
  //and it does proving calculator app works properly
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20000,
    years: 10,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('207.28');
});

/// etc
it('should return a positive value', function() {
  const values = {
    amount: 14000,
    years: 10,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('145.09')
});
  
