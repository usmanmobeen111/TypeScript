// console.log("Hello World") 
// let myName: string = "The Code Weaver"
// let myAge: number = 22
// let isProgrammer: boolean = true
// console.log(`My name is ${myName}, I am ${myAge} years old and ${isProgrammer? "I am": "I am not"} a programmer.`)
// const sum = (a:number, b: number): number=>{
//     return a + b
// }
// console.log(sum(5, 10))
// function factorial(n: number): number {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5))
// Objects 
// interface Person {
//     name: string,
//     age: number,
//     isProgrammer: boolean
// }
// type Person = {
//     name: string,
//     age: number,
//     isProgrammer: boolean
// }
// const person: Person = {
//     name: "Usman",
//     age: 22,
//     isProgrammer: true
// }
// console.log(`My name is ${person.name}, I am ${person.age} years old and ${person.isProgrammer ? "I am" : "I am not"} a programmer.`)
// const numbers: number[]= [1, 2, 3, 4, 5, 6]
// console.log(numbers.map(num=>num * num))
// const arr: (string | number | boolean)[]= ["Hello", 45, true]
// console.log(arr)
// interface User{
//     name: string,
//     age: number,
//     isProgrammer: boolean,
//     greet?: ()=> void
// }
// const usman: User= {
//     name:"Usman",
//     age:22,
//     isProgrammer:true,
//     greet: function(){
//         console.log(`Hello my name is ${this.name} and I am a ${this.isProgrammer ? "programmer" : "non-programmer"}`)
//     }
// }
// console.log(usman)
// usman.greet?.()
// enum Color{
//     Red, 
//     Green, 
//     Blue,
// }
// console.log(Color.Red)
// const logMsg = (msg: any): void =>{
//     console.log(msg)
// }
// logMsg("Hello")
// logMsg(43)
// logMsg(true)
// logMsg(usman) 
// type mathFunciton = (a: number, b: number) => number
// // interface MathFunction{
// //     (a: number, b: number): number
// // }
// const add:mathFunciton = (a, b)=> a + b
// const subtract:mathFunciton = (a, b)=> a - b
// const multiply:mathFunciton = (a, b)=> a * b
// const divide:mathFunciton = (a, b)=> a / b
// console.log(add(5, 10))
// console.log(subtract(5, 10))
// console.log(multiply(5, 10))
// console.log(divide(5, 10))
// const addAll = (a: number, b: number, c?:number): number =>{
//     if(c !== undefined){
//         return a + b + c
//     }
//     return a + b
// }
// console.log(addAll(2, 3, 4))
// const sumAll = (a: number, b: number, c:number = 4): number =>{
//     return a + b + c
// }
// console.log(sumAll(4, 3))
// const total = (...nums: number[]): number =>{
//     return nums.reduce((acc, num)=> acc + num)
// }
// logMsg(total(3, 45, 7, 8, 4))
// type One = string
// type Two = string | number
// type Three = "Hello"
// let a: One = "world"
// let b = a as Two
// let c = a as Three
// let d = <One>"world"
// let e = <string | number>"world"
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// const addOrConcat = (a:number, b: number, c: string): number | string =>{
//     if(c === 'add'){
//         return a + b
//     }
//     return '' + a + b
// }
// let myVal:string = addOrConcat(5, 10, 'concat') as string
// console.log(myVal)
// let nextVal:number = addOrConcat(5, 10, 'add') as number
// console.log(nextVal)
class Coder {
    name;
    music;
    age;
    lang;
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    greet = () => {
        console.log(`Hello, my name is ${this.name} and I am a ${this.age} year old ${this.lang} programmer who loves ${this.music} music.`);
    };
}
const usman = new Coder("Usman", "Pop", 22, "TypeScript");
usman.greet();
console.log(usman);
class WebDeveloper extends Coder {
    computer;
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang = () => {
        console.log(`I write ${this.lang}`);
    };
}
const sara = new WebDeveloper("Mac", "Sara", "Rock", 28, "JavaScript");
sara.getLang();
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}
const jimi = new Guitarist("Jimi Hendrix", "guitar");
console.log(jimi.play("guitaring"));
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
const john = new Peeps("John");
console.log("The id is: " + john.id);
const jane = new Peeps("Jane");
console.log("The id is: " + jane.id);
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Input must be an array of strings");
        }
    }
}
const myBands = new Bands();
myBands.data = ["The Beatles", "Led Zeppelin", "Pink Floyd"];
console.log(myBands.data);
const todaysTransactions = {
    Pizza: -10,
    Books: -20,
    Job: 40
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Books"]);
let prop = "Job";
console.log(todaysTransactions[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTransactions));
const azat = {
    name: "Azat",
    GPA: 3.8,
    classes: [100, 200]
};
for (let key in azat) {
    console.log(`${key}: ${azat[key]}`);
}
Object.keys(azat).map(key => {
    console.log(azat[key]);
});
const logAzatKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logAzatKey(azat, "name");
export {};
