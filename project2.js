let deposits = []
let prompt = require("prompt-sync")();

let customer_name = prompt("insert your name:")
let account_number = prompt("insert your account number:")
let deposit_ammount = prompt("insert your deposit ammount:")

if(deposit_ammount <100){console.log("minimum deposit is 100")}
else{
    let transactionid = Math.round(Math.random()*100000000)
    let date = Date().toLocaleString()

    let deposit = {
        transactionid: transactionid,
        customer_name: customer_name,
        account_number: account_number,
        status: successfull,
        date: date
    }

    deposits.push(deposit)
}
console.log(deposits)