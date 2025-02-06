//SOLUTION

//Write a program that receive a number and verify if it is zero, positive or negative

function generateMultiplicationTable(number: number): number[] {
    const table: number[] = [];
    for (let i = 1; i <= 10; i++) {
        table.push(number * i);
    }
    return table;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.