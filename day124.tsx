const person = {
  name: "Lucas",
  age: 25,
  country: "Brazil"
};

for (const key in person) {
  console.log(`${key}: ${person[key as keyof typeof person]}`);
}