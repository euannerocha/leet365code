//SOLUTION

var createHelloWorld = (): (...args: any) => string => {
    return function(...args: any): string {
        return "Hello World"
    }
}

//TESTING

const helloFunction = createHelloWorld();
console.log(helloFunction(1, "test", true));
console.log(helloFunction(1, "test", true, null));
console.log(helloFunction({ key: "value" }, [1, 2, 3], "another test"));



// MY EXPLANATION ABOUT THE CODE

// Why I used 2 functions?

// 1. The exercise required it.
// 2. Best practices (in this case, we don't need to do anything more than create a function that returns "Hello World". 
// However, in a scalable project, we need functions that can scale. 
// This is the reason why I used 2 functions: if needed, we can modify or add functionalities without changing the main function "createHelloWorld").

// Why I used "...args"?

// Because I have a function that only needs to return a simple string, "Hello World". 
// If I call this function with ANY arguments (numbers, strings, etc.), it will still return "Hello World" in every case. 
// It's just a way to handle the return, so the function knows how to deal with any arguments.



//EXERCISE

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".
 

// Constraints:

// 0 <= args.length <= 10