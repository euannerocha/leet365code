function dividirConta(valorTotal: number, numeroPessoas: number): string {
  if (numeroPessoas <= 0) {
    return "Número de pessoas inválido.";
  }

  const valorPorPessoa: number = valorTotal / numeroPessoas;
  return `Cada pessoa deve pagar R$ ${valorPorPessoa.toFixed(2)}`;
}

// Exemplo de uso:
console.log(dividirConta(150, 3)); // Cada pessoa deve pagar R$ 50.00