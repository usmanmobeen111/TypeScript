let myName: string;

myName = "Usman"
let myAge: number = 30
let isProgrammer: boolean = true
let AnyType: any = "This can be any type"
let album: string | number = "Houdini"

console.log(myName)
console.log(myAge)
console.log(isProgrammer)
console.log(AnyType)

const sum = (a: number, b: number) => {
    return a + b
}

console.log(sum(5, 190))

let postID: string | number
let isActive: boolean | number 

let re: RegExp = /hello/gi