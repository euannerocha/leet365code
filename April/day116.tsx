type Player = {
  name: string;
  health: number;
};

const player1: Player = { name: "Knight", health: 100 };
const player2: Player = { name: "Dragon", health: 120 };

let round: number = 1;

while (player1.health > 0 && player2.health > 0) {
  console.log(`\nRound ${round}`);

  const player1Attack = Math.floor(Math.random() * 20) + 5;
  const player2Attack = Math.floor(Math.random() * 25) + 5;

  console.log(`${player1.name} attacks with ${player1Attack} damage.`);
  console.log(`${player2.name} attacks with ${player2Attack} damage.`);

  player2.health -= player1Attack;
  player1.health -= player2Attack;

  if (player2.health < 0) player2.health = 0;
  if (player1.health < 0) player1.health = 0;

  console.log(`${player1.name} health: ${player1.health}`);
  console.log(`${player2.name} health: ${player2.health}`);

  round++;
}

console.log("\n--- Battle Ended ---");

if (player1.health > 0) {
  console.log(`${player1.name} wins!`);
} else if (player2.health > 0) {
  console.log(`${player2.name} wins!`);
} else {
  console.log("It's a draw!");
}