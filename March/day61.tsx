//SOLUTION

//Write a program that recieves a list of notes and return the average
function notes(n: number[]): number {
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        count += n[i];
    }

    let average = count / n.length

    return average;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.