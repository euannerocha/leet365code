// SOLUTION

function thousand() {

    const newArr: number[] = [];

    for (let i = 0; i <= 1000; i++) {
        if (i % 2 != 0) {
            newArr.push(i);
        }
    };

    return newArr;
}


// EXERCISE:

// Write a function that returns an array containing all the odd numbers from 1 to 1000.

// Requirements:

// The function should return an array of numbers.

// Only odd numbers from 1 to 1000 should be included in the array.

// You can use any looping construct to solve this problem.