let users = []

let prompt = require("prompt-sync")();

let person = prompt("insert your name:")
let movie = prompt("insert the movie title:")
let year = prompt("insert the year the movie was released:")
let genre = prompt("insert the type of genre:")
let ammount = prompt("insert your ammount:")

if(ammount <500){console.log("recharge your accont")}
else{
    
let userid = Math.round(Math.random()*100000000)
 let date = Date().toLocaleString()
// let current_year = date.getFullYear

let user = {
    userid: userid,
    name: person,
    movie_title: movie,
    released_year: year,
    genre: genre,
    date:date
}

users.push(user)
}

console.log(users)
console.log(users.length)