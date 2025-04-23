type User = {
  name: string;
  balance: number;
  active: boolean;
};

const users: User[] = [
  { name: "Alice", balance: 1200, active: true },
  { name: "Bob", balance: 800, active: true },
  { name: "Charlie", balance: 600, active: true },
];

let currentIndex: number = 0;

while (users.some(user => user.active)) {
  const currentUser = users[currentIndex];

  if (!currentUser.active) {
    currentIndex = (currentIndex + 1) % users.length;
    continue;
  }

  const withdrawal: number = Math.floor(Math.random() * 301) + 100;

  console.log(`\n${currentUser.name} is requesting $${withdrawal}`);

  if (withdrawal <= currentUser.balance) {
    currentUser.balance -= withdrawal;
    console.log(`Approved. New balance: $${currentUser.balance}`);
  } else {
    console.log(`Denied. Insufficient funds: $${currentUser.balance}`);
    currentUser.active = false;
    console.log(`${currentUser.name}'s account has been deactivated.`);
  }

  if (currentUser.balance === 0) {
    currentUser.active = false;
    console.log(`${currentUser.name} has zero balance. Account deactivated.`);
  }

  currentIndex = (currentIndex + 1) % users.length;
}

console.log("\nAll accounts are now inactive. System shutdown.");