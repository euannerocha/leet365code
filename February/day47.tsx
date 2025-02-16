//SOLUTION

//Write a program that recieves a number and verify if is a prime number
function primeNumber(n: number): boolean {
    if (n <= 1) return false;
    if (n === 2) return true; 

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        };
    };

    return true;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.