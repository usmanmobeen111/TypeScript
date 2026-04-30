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
// class Coder {
//     constructor(
//         public readonly name: string,
//         public music: string,
//         private age: number,
//         protected lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
//     public greet = (): void => {
//         console.log(`Hello, my name is ${this.name} and I am a ${this.age} year old ${this.lang} programmer who loves ${this.music} music.`)
//     }
// }
// const usman = new Coder("Usman", "Pop", 22, "TypeScript")
// usman.greet()
// console.log(usman)
// class WebDeveloper extends Coder {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number,
//         lang: string
//     ) {
//         super(name, music, age, lang)
//         this.computer = computer
//     }
//     public getLang = (): void => {
//         console.log(`I write ${this.lang}`)
//     }
// }
// const sara = new WebDeveloper("Mac", "Sara", "Rock", 28, "JavaScript")
// sara.getLang()
// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string): string
// }
// class Guitarist implements Musician {
//     name: string
//     instrument: string
//     constructor(name: string, instrument: string) {
//         this.name = name
//         this.instrument = instrument
//     }
//     play(action: string): string {
//         return `${this.name} is ${action} the ${this.instrument}`
//     }
// }
// const jimi = new Guitarist("Jimi Hendrix", "guitar")
// console.log(jimi.play("guitaring"))
// class Peeps {
//     static count: number = 0
//     static getCount(): number {
//         return Peeps.count
//     }
//     public id: number
//     constructor(public name: string) {
//         this.name = name
//         this.id = ++Peeps.count
//     }
// }
// const john = new Peeps("John")
// console.log("The id is: " + john.id)
// const jane = new Peeps("Jane")
// console.log("The id is: " + jane.id)
// class Bands {
//     private dataState: string[]
//     constructor() {
//         this.dataState = []
//     }
//     public get data(): string[] {
//         return this.dataState
//     }
//     public set data(value: string[]) {
//         if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
//             this.dataState = value
//             return
//         }
//         else {
//             throw new Error("Input must be an array of strings")
//         }
//     }
// }
// const myBands = new Bands()
// myBands.data = ["The Beatles", "Led Zeppelin", "Pink Floyd"]
// console.log(myBands.data)
// // interface TransactionObj{
// //    readonly [index: string]: number
// // }
// interface TransactionObj {
//     readonly [index: string]: number
//     Pizza: number,
//     Books: number,
//     Job: number
// }
// const todaysTransactions: TransactionObj = {
//     Pizza: -10,
//     Books: -20,
//     Job: 40
// }
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions["Books"])
// let prop: string = "Job"
// console.log(todaysTransactions[prop])
// const todayNet = (transactions: TransactionObj): number => {
//     let total = 0
//     for (let transaction in transactions) {
//         total += transactions[transaction]
//     }
//     return total
// }
// console.log(todayNet(todaysTransactions))
// interface Student{
//    // [index: string]: string | number | number[] | undefined
//     name: string
//     GPA: number
//     classes?: number[]
// }
// const azat: Student = {
//     name: "Azat",
//     GPA: 3.8,
//     classes: [100, 200]
// }
// for (let key in azat){
//     console.log(`${key}: ${azat[key as keyof Student]}`)
// }
// Object.keys(azat).map(key=>{
//     console.log(azat[key as keyof typeof azat])
// })
// const logAzatKey = (student: Student, key: keyof Student): void =>{
//     console.log(`Student ${key}: ${student[key]}`)
// }
// logAzatKey(azat, "name")
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3, 4]));
console.log(isObj({ name: "Usman" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("John"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Usman" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3, 4]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
export {};
