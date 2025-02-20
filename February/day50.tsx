//SOLUTION

//Write a program that recieves a number and return the Fibonnacci sequence till this number

function fibonacciNumber(n: number): number[] {
    const sequence: number[] = [];

    let a = 0, b = 1;

    while (a <= n) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }

    return sequence;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.