type Venda = {
  cliente: string;
  produto: string;
  quantidade: number;
  precoUnitario: number;
};

const vendas: Venda[] = [
  { cliente: "Ana", produto: "Café", quantidade: 2, precoUnitario: 5 },
  { cliente: "Ana", produto: "Bolo", quantidade: 1, precoUnitario: 10 },
  { cliente: "Bruno", produto: "Café", quantidade: 1, precoUnitario: 5 },
  { cliente: "Ana", produto: "Café", quantidade: 1, precoUnitario: 5 },
  { cliente: "Bruno", produto: "Bolo", quantidade: 2, precoUnitario: 10 }
];

type Relatorio = Record<string, Record<string, number>>;

const relatorio: Relatorio = vendas.reduce((acc, venda) => {
  const { cliente, produto, quantidade, precoUnitario } = venda;
  const total = quantidade * precoUnitario;

  if (!acc[cliente]) {
    acc[cliente] = {};
  }

  if (!acc[cliente][produto]) {
    acc[cliente][produto] = 0;
  }

  acc[cliente][produto] += total;

  return acc;
}, {} as Relatorio);

console.log(relatorio);