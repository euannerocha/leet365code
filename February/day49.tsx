//SOLUTION

//Write a program that recieves a number and return this number converted to 

function convertDay(d: number): number[] {

    let hours = d * 24;
    let minutes = d * 1440;
    let seconds = d * 86400;
    
    let convertedDay = [hours, minutes, seconds];

    return convertedDay;   
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.