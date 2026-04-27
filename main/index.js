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
export {};
