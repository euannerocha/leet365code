const compras = [
  { nome: "Maçã", quantidade: 5, preco: 2 },
  { nome: "Pão", quantidade: 2, preco: 4 },
  { nome: "Leite", quantidade: 3, preco: 5 },
  { nome: "Ovos", quantidade: 12, preco: 0.5 }
];

const resultado = compras.reduce(
  (acc, item) => {
    acc.total += item.quantidade * item.preco;
    acc.itens += item.quantidade;
    return acc;
  },
  { total: 0, itens: 0 } // valor inicial
);

console.log(`Total gasto: R$ ${resultado.total.toFixed(2)}`);
console.log(`Quantidade total de itens: ${resultado.itens}`);