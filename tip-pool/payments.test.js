beforeEach(function () {

});

describe("Testing createCurPayment()", function() {

    it('Should return undefined', function () {
        billAmtInput.value = -1;
        tipAmtInput.value = -1;
        expect(createCurPayment()).toEqual(undefined);
    });

    it('Should return correct bill amount', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 0;
        expect(createCurPayment()).toEqual({billAmt: 100, tipAmt: 0, tipPercent: 0});
    });

    it('Should return undefined', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
    });

});

describe("Testing appendPaymentTable()", function() {
    it('', function () {

    });
});

describe("Testing updateSummary()", function() {
    it('', function () {
        paymentTotal = sumPaymentTotal('tipPercent');
        
    });
});

describe("Testing submitPaymentInfo()", function() {
    it('', function () {

    });
});

afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';

});