//SOLUTION

//Write a program that recieves a number and calculates it's factorial

function factorial(number: number): number {
    let count = 1;
    for (let i = number; i > 0; i--) {
        count *= i;
    }
    return count;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.