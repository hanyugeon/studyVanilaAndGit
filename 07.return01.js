function sayHello(name, age) {  // 함수 선언
    console.log(`Hello ${name} you are ${age} years old`);
}   // return했을때와 console.log()을 썼을때의 차이점 비교해보기.

const greetKim = sayHello("Kim", 24); // 변수 선언
// greetKim은 sayHello 함수의 리턴 값.

console.log(greetKim);