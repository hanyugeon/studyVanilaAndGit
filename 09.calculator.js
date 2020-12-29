const calculator = {
    add : function(a, b) {
        return a + b;
    },
    sub : function(a, b) {
        return a - b;
    },
    mul : function(a, b) {
        return a * b;
    },
    div : function(a, b) {
        return a / b;
    },
    pow : function(a, b) {
        return a ** b;
    }
}

const add = calculator.add(5, 5);
const sub = calculator.sub(5, 5);
const mul = calculator.mul(5, 5);
const div = calculator.div(5, 5);
const pow = calculator.pow(5, 5);

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(pow);