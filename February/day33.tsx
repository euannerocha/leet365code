//LIST SOLUTIONS

// Write a program that recieve an Integer and return the doble of this number 

function double(n: number): number{
    if (!Number.isInteger(n)){
        throw new Error("Use only integers numbers");
    };

    const result = n*2;

    return result;
}

double(2);
double(4);
double(2345);

// Write a program that convert Celsius to Fahrenheit

function celciusToFahrenheit(c: number): number{
    if(isNaN(c)){
        throw new Error("Use just numbers");
    };

    const fahrenheit =  (c * 9/5) + 32;

    return fahrenheit;
}

celciusToFahrenheit(3);
celciusToFahrenheit(0);
celciusToFahrenheit(3.2);

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.
