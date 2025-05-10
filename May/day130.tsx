function splitBill(): void {
  const totalAmountStr = prompt("Enter the total bill amount ($):");
  const numberOfPeopleStr = prompt("Enter the number of people:");

  if (!totalAmountStr || !numberOfPeopleStr) {
    alert("Invalid input.");
    return;
  }

  const totalAmount = parseFloat(totalAmountStr);
  const numberOfPeople = parseInt(numberOfPeopleStr);

  if (isNaN(totalAmount) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
    alert("Invalid data.");
    return;
  }

  const amountPerPerson = totalAmount / numberOfPeople;
  alert(`Each person should pay $${amountPerPerson.toFixed(2)}`);
}

// Call the function
splitBill();