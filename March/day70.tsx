//SOLUTION

//Write a program that reads two arrays and displays the sum of each element in the same positions 

function sumVectors(vec1: number[], vec2: number[]): number[] {
    const minLength = Math.min(vec1.length, vec2.length);
    const result: number[] = [];

    for (let i = 0; i < minLength; i++) {
        result.push(vec1[i] + vec2[i]);
    }

    return result;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.