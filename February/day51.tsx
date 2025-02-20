//SOLUTION

//Write a program that recieves a wonrd and counts how many vowels it have

function countVowels(word: string): number {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of word.toLowerCase()) { 
        if (vowels.includes(char)) {      
            count++;
        }
    }

    return count;
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.