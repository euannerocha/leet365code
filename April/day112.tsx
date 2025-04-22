let balance: number = 1000;
let attempt: number = 0;
const maxAttempts: number = 5;

while (balance > 0 && attempt < maxAttempts) {
  const withdrawal: number = Math.floor(Math.random() * 301) + 100;

  console.log(`Attempt ${attempt + 1}: Requested withdrawal of $${withdrawal}`);

  if (withdrawal <= balance) {
    balance -= withdrawal;
    console.log(`Withdrawal approved. Remaining balance: $${balance}`);
  } else {
    console.log(`Withdrawal denied. Insufficient balance: $${balance}`);
  }

  attempt++;
}

console.log("Transactions ended.");