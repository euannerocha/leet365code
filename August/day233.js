// SOLUTION

const arrayToFilter = [1, 2, 3, 4, 5];
const limit = 3;

function filterNumbers(arr, lim) {
    let arrFiltered = [];
    arr.filter(n => {
        if (n >= lim) {
            arrFiltered.push(n)
        }
    })
    return arrFiltered;
};

filterNumbers(arrayToFilter, limit);

// EXERCISE

// You are given an array of integers and need to implement a function called filterNumbers that filters the elements based on a given limit. The task is to use the JavaScript filter method to solve this problem.

// Instructions:

// Write a function called filterNumbers that takes two parameters:

// An array of integers (arr).

// A number (lim) that will act as the limit for filtering.

// Use the filter method to create a new array that contains only the elements from the original array that are greater than or equal to the given limit.