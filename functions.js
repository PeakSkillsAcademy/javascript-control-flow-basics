// function addNumbers(name){
//     return name

// }

// //call the function
// console.log(addNumbers(""))


//arrow function
// let addNumbers = (a,b)=>{
  
//    return a-b
// }
// console.log(addNumbers(5,2))



// console.log("laura")
// console.log("lewis")
// console.log("kamaa")
const prompt = require("prompt-sync")()

// function multiply(a,b){
//     return a*b
// }


function addNumbers(a,b){
    return a+b
}

// function subtractNumbers(a,b){
//     return a-b
// }

// function divideNumbers(a,b){
//     return a/b
// }


// const user_input = prompt("choose an operation:1. addition,2. subtraction 3. multiplication ,4. division:")


// switch(user_input){
//     case "1":
//         const num1 = Number(prompt("Enter first number:"))
//         const num2 = Number(prompt("Enter second number:"))

//        console.log(addNumbers(num1,num2))
//        break;
    
//     case "2":
//         const num3 = Number(prompt("Enter first number:"))
//         const num4 = Number(prompt("Enter second number:"))

//        console.log(subtractNumbers(num3,num4))
//        break;
    
//     case "3":
//         const num5 = Number(prompt("Enter first number:"))
//         const num6 = Number(prompt("Enter second number:"))

//        console.log(multiply(num5,num6))
//        break;

//     case "4":
//         const num7 = Number(prompt("Enter first number:"))
//         const num8 = Number(prompt("Enter second number:"))

//        console.log(divideNumbers(num7,num8))
//        break;

//     default:
//         console.log("Select numbers between 1-4")

// }


let user_input = prompt("Enter two numbers seperated by comma")

const inputArray = user_input.split(",")
console.log(inputArray )
 console.log(addNumbers(Number(inputArray[0]),Number(inputArray[1])))