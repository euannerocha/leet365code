//LIST SOLUTIONS

// Read two integer numbers and display their sum
function sum(a: number, b: number): number {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Please, use integers only");
    };

    let calculateSum = a + b;

    return calculateSum;
}

sum(1, 2);
sum(3, 1);
sum(200, 1);

//Build a function to read an integer and return n + 1

function successor(n: number): number {

    if (!Number.isInteger(n)) {
        throw new Error("Please, use integers only");
    };

    let calculateSuccessor = n + 1;

    return calculateSuccessor;
}

successor(2);
successor(25);
successor(255);

//Build a program that calculates the average of three integers

function average(n: number, k: number, l: number): number {

    const numbers = [n, k, l];

    if (!numbers.every(Number.isInteger)) {
        throw new Error("Please, use integers only");
    };

    let calculateAverage = (n + k + l) / 3;

    return calculateAverage;
}

successor(2);
successor(25);
successor(255);

//Build a program that verifies if an integer is even or odd

function oddOrEven(i: number): string {

    if (!Number.isInteger(i)) {
        throw new Error("Please, use integers only");
    };

    let even = i % 2 === 0;
    let result = even ? "Is Even" : "Is Odd";

    return result;
}

oddOrEven(2);
oddOrEven(25);
oddOrEven(255);

// Build a program that verifies if a person is an adult or a minor

function adultOrMinor(a: number): string {
    if (!Number.isInteger(a)) {
        throw new Error("Please, use integers only")
    };

    let minor = a < 18;
    let result = minor ? "Is minor" : "Is adult";

    return result;
}

adultOrMinor(10);
adultOrMinor(18);
adultOrMinor(50);

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.