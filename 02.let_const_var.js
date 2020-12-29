// const(=constant) : 안정적임, 변하지 않음.
const a = 221;
let b = a - 5;
// a = 4; (에러 : 바꿀 수 없어.)
console.log(b, a);

/*만약에 다른 사람들이 변수를 바꿀 수 없게 하려면
const 사용하기, 만약 바뀌어도 괜찮다면 let 사용하기*/

/*
var a = 221;
var b = a - 5;
a = 4;
console.log(b, a);
*/