function splitBillBasicImproved(): void {
  const totalAmountStr = prompt("Enter the total bill amount ($):");
  const namesStr = prompt("Enter the names of the people, separated by commas:");

  if (!totalAmountStr || !namesStr) {
    alert("All fields are required.");
    return;
  }

  const totalAmount = parseFloat(totalAmountStr);
  if (isNaN(totalAmount) || totalAmount <= 0) {
    alert("The total amount must be a number greater than zero.");
    return;
  }

  const rawNames = namesStr.split(",");
  const names: string[] = [];

  rawNames.forEach((name) => {
    const trimmed = name.trim();
    if (trimmed && !names.includes(trimmed)) {
      names.push(trimmed);
    }
  });

  if (names.length === 0) {
    alert("Please enter at least one valid name.");
    return;
  }

  const amountPerPerson = totalAmount / names.length;

  let message = `Total: $${totalAmount.toFixed(2)}\n`;
  message += `Number of people: ${names.length}\n\n`;

  names.forEach(name => {
    message += `${name} should pay $${amountPerPerson.toFixed(2)}\n`;
  });

  alert(message);
  console.clear();
  console.log(message);
}

// Run the function
splitBillBasicImproved();