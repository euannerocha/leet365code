//SOLUTION

//Write a program that receives a number and returns the sum of the digits

function sumDigits(n: number[]): number {
    let digitsTreatment = n.toString().split(' ').map(Number).reduce((acc, digit) => acc + digit, 0)

    return digitsTreatment;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.