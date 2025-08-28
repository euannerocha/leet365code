// Exercise

*/
Shopping Cart Analysis

You are given an array of products in a shopping cart. Each product has:

name (string)

price (number)

quantity (number)

category (string)


Your tasks are:

1. Calculate the total cost of the cart.


2. Group the products by category (e.g., food, electronics, clothing).


3. Find the most expensive product in the cart.


4. Find the cheapest product in the cart.


5. Transform the cart into a list of product summaries in the format:

{ name: "ProductName", totalPrice: price * quantity }


6. Bonus challenge: Create a discount rule where:

If total cost > 100, apply 10% discount.

If total cost > 200, apply 20% discount.


*/


// SOLUTION

const cart = [
  { name: "Laptop", price: 1000, quantity: 1, category: "electronics" },
  { name: "Headphones", price: 100, quantity: 2, category: "electronics" },
  { name: "Shirt", price: 40, quantity: 3, category: "clothing" },
  { name: "Apples", price: 5, quantity: 10, category: "food" },
  { name: "Bread", price: 3, quantity: 4, category: "food" },
];

const totalCost = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

const groupedByCategory = cart.reduce((acc, product) => {
  acc[product.category] = acc[product.category] || [];
  acc[product.category].push(product);
  return acc;
}, {});

const mostExpensive = cart.reduce((max, product) =>
  product.price > max.price ? product : max
);

const cheapest = cart.reduce((min, product) =>
  product.price < min.price ? product : min
);

const summaries = cart.map(product => ({
  name: product.name,
  totalPrice: product.price * product.quantity,
}));

let discount = 0;
if (totalCost > 200) discount = totalCost * 0.2;
else if (totalCost > 100) discount = totalCost * 0.1;

const finalPrice = totalCost - discount;

{
  totalCost,
  groupedByCategory,
  mostExpensive,
  cheapest,
  summaries,
  discount,
  finalPrice
}

