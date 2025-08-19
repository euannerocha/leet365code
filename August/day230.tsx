const nums: number[] = [10, 20, 30, 40];
const words: string[] = ["hello", "olá", "annyeong"];

function forFunction(arr: []) {
    for (let i = 0; i < arr.length; i++) {
        i;
    };
};

function whileFunction(arr: []) {
    let i = 0;

    while (i < arr.length) {
        console.log(arr[i])
        i++;
    };
};

function doWhileFunction() {
    let success = false;
    let tentatives = 0;

    do {
        tentatives++;
        success = Math.random() > 0.7;
    } while (!success && tentatives < 10);

    console.log(success, tentatives);
};

function forOfFunction(arr: []) {
    for (const word in arr) {
        console.log(word);
    };
};

function forInFunction() {
    type User = { id: number; name: string };
    const user: User = { id: 1, name: "Anne" };
    const keys: string[] = [];

    for (const key in user) {
        const value = user[key as keyof User]
        keys.push(`${key}: ${value}`);
    };
};

