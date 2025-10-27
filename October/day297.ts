// Array methods - A Review

// 01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.
type Numbers = {
    x: number;
    y: number
}
export function orderTwoNumbers({x, y}: Numbers): string {
    if (x > y){
        return `${y} e ${x}`
    }
    return `${x} e ${y}`
}

orderTwoNumbers({x: 1, y: 2})

//Se fosse com sort

export function sortOrderTwoNumbers({x, y}: Numbers): Array<number> {
  const newArr: number[] = [];
  newArr.push(x, y);

  newArr.sort((a, b) => a-b)

  return newArr;
}


export function sortOrderTwoNumbersSimplified({x, y}: Numbers): Array<number>{
    return [x, y].sort((a, b) => a-b);
}


// 02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

function orderingNumbersAscending([x, y, z]: number[]): Array<number> {
    return [x, y, z].sort((a, b) => a-b);
}

orderingNumbersAscending([1,2,3]);


// 03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array. Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3, vai aparecer: 3,2,1

function userNumbersDescending(): Array<number>{
    const x = Number(prompt("Digite o primeiro número"));
    const y = Number(prompt("Digite o segundo número"));
    const z = Number(prompt("Digite o terceiro número"));

    return [x, y, z].reverse();
}

// 04. Dado um array de números, crie um novo array com cada número dobrado.
const arrNum = [1, 2, 3, 4];
function arrMulti(arr: number[]): Array<number>{

    return arr.map((i) => i*2);
}


// 05. Dado o array abaixo, filtre apenas os números maiores ou iguais a 10
const arrAbaixo = [1, 5, 10, 11]

arrAbaixo.filter((i) => i>= 10);

// 06. Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

// 07. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores do array.

// 08. Faça o mesmo do exercício anterior, mas com fatorial.
// Fatorial de 0: 0! = '
// Fatorial de 1: 1 x elemento0 = 1
// Fatorial de 2: 2 x elemento1 = 2
// Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
// ...
// Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!

// 08. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias.
// O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for o jogador 1 ou jogador 2) que

// 09. Peça ao usuário uma quantidade de linhas e e outra de colunas, depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

// Faça uma logica de search simples



