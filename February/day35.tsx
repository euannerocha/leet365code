//SOLUTION

//Write a program that receive a number and verify if it is zero, positive or negative

function verifyNumber(n: number): string{

    return n === 0 ? "zero" : n > 0 ? "positive" : "negative";
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.
//I'll not use new Error anymore, cause i'm using Typescript, and this already validate if its a number or not.