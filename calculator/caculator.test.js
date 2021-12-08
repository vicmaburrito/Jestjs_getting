const Calculator = require('./calculator');

const calc = new Calculator();

describe('add',() => {
    it('The sum 1+2 should to be equal with 3',() => {
        expect(calc.add(1,2)).toBe(3);
    })
    it('The sum 1+2+3 should to be equal with 6',() => {
        expect(calc.add(1,2,3)).toBe(6);
    })
    it('The sum 1+2+3+4 should to be equal with 10',() => {
        expect(calc.add(1,2,3,4)).toBe(10);
    })
})

describe('subtract',() => {
    it('The subtract 10-5 should to be equal with 5',() => {
        expect(calc.subtract(10,5)).toBe(5);
    })
    it('The subtract 22-11 should to be equal with 11',() => {
        expect(calc.subtract(22-11)).toBe(11);
    })
    it('The subtract 28-7 should to equal with 21',() => {
        expect(calc.subtract(28-7)).toBe(21);
    })
})