//SOLUTION

//Write a program that recieves 10 numbers and return the sum of them

function tenNumbers(numbers: number[]): number {
    if (numbers.length !== 10) {
        throw new Error("You must provide exactly 10 numbers.");
    }

    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }

    return sum;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.