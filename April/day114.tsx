const user = {
  name: "Alice",
  age: 30,
  country: "USA"
};

for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}