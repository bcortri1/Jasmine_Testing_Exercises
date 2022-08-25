beforeEach(function () {
    
});

describe("Testing sumPaymentTotal()", function() {
    
    it('Should return 10', function () {
        let type = {tipAmt: 0, billAmt: 10, tipPercent: 0};
        expect(sumPaymentTotal(type)).toEqual(10);
    });

    it('Should return 11', function () {
        type = {tipAmt: 1, billAmt: 10, tipPercent: 0};
        expect(sumPaymentTotal(type)).toEqual(11);

        type = {tipAmt: 0, billAmt: 10,tipPercent: 1};
        expect(sumPaymentTotal(type)).toEqual(11);
    });

    it('Should return 12', function () {
        //Should add code to allowing only (tipAmt and billAmt) or tipPercent
        let type = {tipAmt: 1.00, billAmt: 10.00, tipPercent: 1.00};
        expect(sumPaymentTotal(type)).toEqual(12);
    });

    it('Should return 1', function () {
        //Should add code to allowing only (tipAmt and billAmt) or tipPercent
        let type = {tipPercent: 1.00};
        expect(sumPaymentTotal(type)).toEqual(1);
    });
});

describe("Testing caculateTipPercent()", function() {
    it('Should return 1', function () {
        expect(calculateTipPercent(10,10)).toEqual(100);

    });
});

describe("Testing appendTd()", function() {
    it('Should return test', function() {
        expect( ()=> {
            let tr = document.createElement('tr');
            let value = 'test';
            appendTd(tr, value);
            return tr.innerText;

        }).toEqual('test');
    });
});

afterEach(function() {
    
});