//SOLUTION

//Write a program that calculates a triangle area

function calculateTriangleArea(b: number, h: number): number{
    if (isNaN(b) || isNaN(h)){
        throw new Error("Use just numbers");
    };

    const area = b * h /2;

    return area;
}

calculateTriangleArea(3, 2);
calculateTriangleArea(7, 9);

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.
