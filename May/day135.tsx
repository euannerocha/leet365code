class Contador {
  private valor: number;

  constructor() {
    this.valor = 0;
  }

  incrementar(): void {
    this.valor++;
  }

  decrementar(): void {
    this.valor--;
  }

  zerar(): void {
    this.valor = 0;
  }

  getValor(): number {
    return this.valor;
  }
}

// Exemplo de uso:
const contador = new Contador();

contador.incrementar(); // valor = 1
contador.incrementar(); // valor = 2
contador.decrementar(); // valor = 1
contador.zerar();       // valor = 0

console.log(contador.getValor()); // Saída: 0