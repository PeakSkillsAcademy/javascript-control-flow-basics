let water_bills = []
let prompt = require("prompt-sync")()

function calculate_bill(units){
    let cost_per_unit;

    if(units >10){
        cost_per_unit = 20
    }
    else{
        cost_per_unit = 15
    }
return units * Number(cost_per_unit)
}

let customer_name = prompt("enter your name:")
let units = Number(prompt("enter units of water used:"))


let total_bill = calculate_bill(units)
let date = Date().toLocaleString()

let bill = {
    name: customer_name,
    units: units,
    date: date,
    totalBill:total_bill
}
water_bills.push(bill)
console.log(water_bills)