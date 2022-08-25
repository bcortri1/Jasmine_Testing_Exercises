beforeEach(function () {
    
});

describe("Testing sumPaymentTotal()", function() {
    
    it('Should return 10 for each type given', function () {
        allPayments = {payment1: {tipAmt: 10, billAmt: 10, tipPercent: 10}};
        let type = 'billAmt';
        expect(sumPaymentTotal(type)).toEqual(10);
        type = 'tipAmt';
        expect(sumPaymentTotal(type)).toEqual(10);
        type = 'tipPercent';
        expect(sumPaymentTotal(type)).toEqual(10);
    });

    it('Should return 0 for each type given', function () {
        allPayments = {payment1: {tipAmt: 0, billAmt: 0, tipPercent: 0}};
        let type = 'billAmt';
        expect(sumPaymentTotal(type)).toEqual(0);
        type = 'tipAmt';
        expect(sumPaymentTotal(type)).toEqual(0);
        type = 'tipPercent';
        expect(sumPaymentTotal(type)).toEqual(0);
    });

    it('Should return 0 with all payments empty', function () {
        allPayments = {};
        let type = 'billAmt';
        expect(sumPaymentTotal(type)).toEqual(0);
        type = 'tipAmt';
        expect(sumPaymentTotal(type)).toEqual(0);
        type = 'tipPercent';
        expect(sumPaymentTotal(type)).toEqual(0);
    });

    it('Should return 3 for each payment type', function () {
        allPayments = {payment1: {tipAmt: 1, billAmt: 1, tipPercent: 1},payment2: {tipAmt: 2, billAmt: 2, tipPercent: 2}};
        let type = 'billAmt';
        expect(sumPaymentTotal(type)).toEqual(3);
        type = 'tipAmt';
        expect(sumPaymentTotal(type)).toEqual(3);
        type = 'tipPercent';
        expect(sumPaymentTotal(type)).toEqual(3);
    });

});

describe("Testing caculateTipPercent()", function() {
    it('Should return 100', function () {
        expect(calculateTipPercent(10,10)).toEqual(100);

    });

    it('Should return 50', function () {
        expect(calculateTipPercent(10,5)).toEqual(50);

    });

    it('Should return 0', function () {
        expect(calculateTipPercent(10,0)).toEqual(0);

    });

    it('Should return NaN', function () {
        expect(calculateTipPercent(0,0)).toEqual(NaN);

    });
});

describe("Testing appendTd()", function() {
    it('Should return a count of one', function() {
        let tr = document.createElement('TR')
        appendTd(tr,'test')
        expect(tr.childElementCount).toEqual(1);
    });

    it('Should return a value of test', function() {
        let tr = document.createElement('TR')
        appendTd(tr,'test')
        expect(tr.children[0].innerText).toEqual('test');
    });
});

afterEach(function() {
    allPayments={};
    type = '';
    tr = '';
});