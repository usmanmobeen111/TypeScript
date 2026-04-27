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

interface User{
    name: string,
    age: number,
    isProgrammer: boolean,
    greet?: ()=> void
}

const usman: User= {
    name:"Usman",
    age:22,
    isProgrammer:true,
    greet: function(){
        console.log(`Hello my name is ${this.name} and I am a ${this.isProgrammer ? "programmer" : "non-programmer"}`)
    }
}

console.log(usman)
usman.greet?.()

enum Color{
    Red, 
    Green, 
    Blue,
}

console.log(Color.Red)

const logMsg = (msg: any): void =>{
    console.log(msg)
}

logMsg("Hello")
logMsg(43)
logMsg(true)
logMsg(usman)