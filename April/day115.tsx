type User = {
  name: string;
  age: number;
  purchases: string[];
};

const users: { [id: string]: User } = {
  u001: { name: "Alice", age: 28, purchases: ["Laptop", "Book", "Pen"] },
  u002: { name: "Bob", age: 35, purchases: ["Smartphone"] },
  u003: { name: "Charlie", age: 22, purchases: ["Backpack", "Notebook"] },
};

for (const userId in users) {
  const user = users[userId];
  console.log(`\nUser ID: ${userId}`);
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log("Purchases:");

  for (const item of user.purchases) {
    console.log(` - ${item}`);
  }

  if (user.purchases.length > 2) {
    console.log(`${user.name} is a frequent buyer.`);
  } else {
    console.log(`${user.name} is a casual buyer.`);
  }
}