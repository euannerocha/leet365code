//SOLUTION

//Write a program that recieves values and return the inverse of these values

function inverter(n: number[]): number[] {

    let newArr: number[] = [];

    let invertNumbers = n.map((n) => {
        newArr.push(parseFloat(n.toString().split('').reverse().join(''))*Math.sign(n));
    });

    return newArr;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.