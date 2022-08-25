beforeEach(function () {

});

describe("Testing createCurPayment()", function() {

    it('Should return undefined', function () {
        billAmtInput.value = -1;
        tipAmtInput.value = -1;
        expect(createCurPayment()).toEqual(undefined);
    });

    it('Should return undefined', function () {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        expect(createCurPayment()).toEqual(undefined);
    });


    it('Should return 100', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 0;
        expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '0', tipPercent: 0});
    });

    it('Should return undefined', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
    });

});

describe("Testing appendPaymentTable()", function() {
    it('should add to payment table with provided values', function () {
        appendPaymentTable({ billAmt: "1", tipAmt: "1", tipPercent: 100 })
        let tempTbody = document.querySelectorAll('#paymentTable tbody tr td')
        expect(tempTbody[0].innerText).toEqual('$1');
        expect(tempTbody[1].innerText).toEqual('$1');
        expect(tempTbody[2].innerText).toEqual('100%');
    });

    it('should add to payment table with provided values', function () {
        appendPaymentTable({ billAmt: "2", tipAmt: "1", tipPercent: 50 })
        let tempTbody = document.querySelectorAll('#paymentTable tbody tr td')
        expect(tempTbody[0].innerText).toEqual('$2');
        expect(tempTbody[1].innerText).toEqual('$1');
        expect(tempTbody[2].innerText).toEqual('50%');
    });
});

describe("Testing updateSummary()", function() {
    it('should update shift summary table with correct values', function () {
        allPayments = {
            payment1: { billAmt: "1", tipAmt: "1", tipPercent: 100 },
            payment2: { billAmt: "2", tipAmt: "2", tipPercent: 100 }
        }
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$3');
        expect(summaryTds[1].innerHTML).toEqual('$3');
        expect(summaryTds[2].innerHTML).toEqual('100%');
        
    });
    it('should update shift summary table with correct values', function () {
        allPayments = {
            payment1: { billAmt: "1", tipAmt: "1", tipPercent: 50 },
            payment2: { billAmt: "2", tipAmt: "2", tipPercent: 50 }
        }
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$3');
        expect(summaryTds[1].innerHTML).toEqual('$3');
        expect(summaryTds[2].innerHTML).toEqual('50%');
        
    });
    it('should update shift summary table with correct values', function () {
        allPayments = {
            payment1: { billAmt: "1", tipAmt: "0", tipPercent: 0 },
            payment2: { billAmt: "2", tipAmt: "2", tipPercent: 100 }
        }
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$3');
        expect(summaryTds[1].innerHTML).toEqual('$2');
        expect(summaryTds[2].innerHTML).toEqual('50%');
        
    });
});

describe("Testing submitPaymentInfo()", function() {
    it('Should return undefined', function () {
        billAmtInput.value = -1;
        tipAmtInput.value = -1;
        expect(submitPaymentInfo()).toEqual(undefined);
    });

    it('should make payment value increment by 2 ', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 0;
        submitPaymentInfo();
        billAmtInput.value = 100;
        tipAmtInput.value = 0;
        submitPaymentInfo();
        expect(paymentId).toEqual(2);
    });

    it('should make payment value increment by 1 ', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 0;
        submitPaymentInfo();
        expect(paymentId).toEqual(1);
    });

});

afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    document.querySelector('tbody').innerHTML=''
    allPayments = {};
    paymentId=0;
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';

});