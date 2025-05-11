function splitBillWithNames(): void {
    const totalAmountStr = prompt("Enter the total bill amount ($):");
    const namesStr = prompt("Enter the names of the people, separated by commas:");

    if (!totalAmountStr || !namesStr) {
        alert("Invalid input.");
        return;
    }

    const totalAmount = parseFloat(totalAmountStr);
    const names = namesStr.split(",").map(name => name.trim()).filter(name => name !== "");

    if (isNaN(totalAmount) || names.length === 0) {
        alert("Invalid data.");
        return;
    }

    const amountPerPerson = totalAmount / names.length;

    let message = `Total bill: $${totalAmount.toFixed(2)}\n`;
    message += `Number of people: ${names.length}\n\n`;
    names.forEach(name => {
        message += `${name} should pay $${amountPerPerson.toFixed(2)}\n`;
    });

    alert(message);
}

splitBillWithNames();
