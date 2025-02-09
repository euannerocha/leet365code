//SOLUTION

//Write a program that recieve an array of ages and calculates the average between those ages

function agesAverage(ages: number[]): number {
    let count = 0;
    ages.forEach((i) => {
        count += i;;
    })
    let averageAge = count / ages.length
    return averageAge;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.