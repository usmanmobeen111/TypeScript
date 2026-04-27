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
export {};
