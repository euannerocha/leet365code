type Usuario = {
  nome: string;
  idade: number;
};

const usuarios: Usuario[] = [
  { nome: "Ana", idade: 30 },
  { nome: "Carlos", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Daniela", idade: 22 },
  { nome: "Beatriz", idade: 25 }
];

const ordenado = usuarios.sort((a, b) => {
  if (b.idade !== a.idade) {
    return b.idade - a.idade;
  }
  return a.nome.localeCompare(b.nome);
});

console.log(ordenado);