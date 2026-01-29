let orders = []
let prompt = require("prompt-sync")()

function get_food_price(item){
    if(item = burger){return "300"}
    if(item = pizza){return"800"}
    if(item = fries){return"200"}
    else{return"0"}
}

function calculate_total(price_quantity){
    let price
    return price * quantity
}

function place_order(item_quantity){
    if(item_price = 0){
        return "item not available"
    }
    if(quantity <1){
        return "invalid quantity"
    }
    else{
        return "order placed successfull"
    }
}

let customer_name = prompt("enter your name:")
let food_item = prompt("choose between burger, pizza, fries:")
let quantity = Number(prompt("enter desired quantity:"))

let date = Date().toLocaleString()
let total = calculate_total("price_quantity")

let order = {
   name: customer_name,
   item: food_item,
   quantity: quantity,
   total: calculate_total,
   status:"confirmed",
   date:date
}

orders.push(order)
console.log(orders)