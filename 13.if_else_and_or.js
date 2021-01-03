// if(10 === 5) {
//     console.log('hi');
// } else if("10" === "10") {
//     console.log('lalalala');
// } else {
//     console.log('ho');
// }

// if(20 > 5 && "han" === "hak") {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// if(20 > 5 || "han" === "han") {
//     console.log("yes");
// } else {
//     console.log("no");
// }

const age = prompt("how old are you?");

if(age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
} else if(age > 21) {
    console.log("go ahead")
} else {
    console.log("too young")
}