type Produto = {
  nome: string;
  preco: number;
  disponivel: boolean;
};

const produtos: Produto[] = [
  { nome: "café", preco: 9.5, disponivel: true },
  { nome: "chá", preco: 5.75, disponivel: false },
  { nome: "bolo", preco: 12, disponivel: true }
];

const catalogoFormatado = produtos.map((produto) => {
  return {
    nome: produto.nome.toUpperCase(),
    preco: produto.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }),
    status: produto.disponivel ? "Disponível" : "Indisponível"
  };
});

console.log(catalogoFormatado);