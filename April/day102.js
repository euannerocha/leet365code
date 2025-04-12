const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(soma);