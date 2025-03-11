//SOLUTION

//Write a program that returns a simple calculator 

function calculator(a: number, b: number, operation: string): number | string {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Erro: Divisão por zero';
        default:
            return 'Erro: Operação inválida';
    }
}

// MY EXPLANATION ABOUT THE CODE

//I'm doing a basic exercises list, to practice.