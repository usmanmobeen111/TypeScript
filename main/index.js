// console.log("Hello World") 
const usman = {
    name: "Usman",
    age: 22,
    isProgrammer: true,
    greet: function () {
        console.log(`Hello my name is ${this.name} and I am a ${this.isProgrammer ? "programmer" : "non-programmer"}`);
    }
};
console.log(usman);
usman.greet?.();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello");
logMsg(43);
logMsg(true);
logMsg(usman);
// interface MathFunction{
//     (a: number, b: number): number
// }
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
console.log(add(5, 10));
console.log(subtract(5, 10));
console.log(multiply(5, 10));
console.log(divide(5, 10));
const addAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(2, 3, 4));
const sumAll = (a, b, c = 4) => {
    return a + b + c;
};
console.log(sumAll(4, 3));
const total = (...nums) => {
    return nums.reduce((acc, num) => acc + num);
};
logMsg(total(3, 45, 7, 8, 4));
let a = "world";
let b = a;
let c = a;
let d = "world";
let e = "world";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(5, 10, 'concat');
console.log(myVal);
let nextVal = addOrConcat(5, 10, 'add');
console.log(nextVal);
export {};
