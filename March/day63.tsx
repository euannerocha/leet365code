//SOLUTION

//Write a program that recieves names and return the biggest one

function biggestName(names: string[]): string | undefined {
    return names.reduce((biggest, current) => 
        current.length > biggest.length ? current : biggest, 
        names[0]
    );
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.