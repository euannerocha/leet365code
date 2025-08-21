const array = [21, "Anne", 27, "Angular", 20, "Jong", 50];

function separate(arr: (number | string)[]) {
    let newArrStr: string[] = [];
    let newArrNum: number[] = [];

    const str = arr.filter(item => typeof item === "string")
    newArrStr.push(...str);
    
    const num = arr.filter(item => typeof item === "number")
    newArrNum.push(...num);

    return {newArrNum, newArrStr};
}

separate(array);