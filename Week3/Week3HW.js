let pizzaToppings = ["banana peppers", "onions", "jollies", "shallots"];
//2
function greetCustomer() {
let greet = "Welcome to Funion! We have the following toppings: "
for (let topping of pizzaToppings) {
  greet += `${topping} `;
    }
console.log(greet);
}
//3
function getPizzaOrder(size, crust, ...toppings) {
  //10
  //if (getPizzaOrder
  console.log(`One ${size} ${crust} crust pizza with ${toppings} coming right up!`)
  let ordered = [size, crust, toppings];
  return ordered;
}
// 4
function preparePizza(chosen) {
  console.log(`The ${chosen[0]}, ${chosen[1]} crust, ${chosen[2]} is working!`)
  return pizzazz = {
    size: chosen[0],
    crust: chosen[1],
    toppings: chosen[2]
  }
}
//5
function servePizza(pizza){
  console.log(`The ${pizza.size}, ${pizza.crust} crust, ${pizza.toppings} is on deck!`);
  return pizza;
}
//Bonus XD?
//function listToppings(){
  //console.log(pizzaToppings.pop);
  //let and = pizzaToppings[pizzaToppings.length - 2]
  //somehow I want to .push ", and "?
//}

greetCustomer();
servePizza(preparePizza(getPizzaOrder("12 inch", "stuffed", ["jollies", "shallots"])));
