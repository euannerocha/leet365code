type Compra = {
  item: string;
  categoria: string;
  valor: number;
};

const compras: Compra[] = [
  { item: "Maçã", categoria: "Alimentos", valor: 5 },
  { item: "Banana", categoria: "Alimentos", valor: 3 },
  { item: "Shampoo", categoria: "Higiene", valor: 12 },
  { item: "Sabonete", categoria: "Higiene", valor: 4 },
  { item: "Caderno", categoria: "Papelaria", valor: 15 },
];

const totalPorCategoria = compras.reduce<Record<string, number>>((acc, compra) => {
  const { categoria, valor } = compra;
  acc[categoria] = (acc[categoria] || 0) + valor;
  return acc;
}, {});

console.log(totalPorCategoria);