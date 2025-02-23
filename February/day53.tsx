//SOLUTION

//Write a program that recieves some temperatures and return the average

function temperature(t: number[]): number {
    let temperatures = [10, 40, 27, 18, 39];

    let count = 0;
    temperatures.forEach((i) => {
        count += i;
    })

    let temperaturesAverage = count / temperatures.length

    return temperaturesAverage;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.