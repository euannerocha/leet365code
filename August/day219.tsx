const users = [
  { name: "Alice", age: 28, purchases: [120, 35, 78] },
  { name: "Bob", age: 17, purchases: [15, 40] },
  { name: "Charlie", age: 33, purchases: [200, 300, 50, 25] },
  { name: "Diana", age: 21, purchases: [5, 15] }
];

const report = users
  .filter(user => user.age >= 18)
  .map(user => ({
    name: user.name,
    totalSpent: user.purchases.reduce((sum, val) => sum + val, 0)
  }))
  .sort((a, b) => b.totalSpent - a.totalSpent)
  .map((user, index) => ({
    rank: index + 1,
    ...user
  }));

console.log(report);