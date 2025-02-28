//SOLUTION

//Write a program that receives a birth date and returns the current age

function age(d: Date): number {
    let todayDate = new Date();

    let yearsDiff = todayDate.getFullYear() - d.getFullYear();
    let monthDiff = todayDate.getMonth() - d.getMonth();
    let dayDiff = todayDate.getDate() - d.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearsDiff--;
    }

    return yearsDiff;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.