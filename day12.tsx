//SOLUTION

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    return result1 + result2;
}

//TESTING

const promise1 = new Promise<number>(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise<number>(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(console.log);

// MY EXPLANATION ABOUT THE CODE

// 😒

// EXERCISE

//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 
// Example 1:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 
// Constraints:

// promise1 and promise2 are promises that resolve with a number