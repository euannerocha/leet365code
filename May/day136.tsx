class Contador {
  private _valor: number;

  constructor(valorInicial: number = 0) {
    this._valor = valorInicial;
  }

  public incrementar(passo: number = 1): void {
    this._valor += passo;
  }

  public decrementar(passo: number = 1): void {
    this._valor = Math.max(0, this._valor - passo); // impede valor negativo
  }

  public zerar(): void {
    this._valor = 0;
  }

  public set valor(novoValor: number) {
    if (novoValor < 0) {
      throw new Error("O valor do contador não pode ser negativo.");
    }
    this._valor = novoValor;
  }

  public get valor(): number {
    return this._valor;
  }
}

// Exemplo de uso:
const contador = new Contador();

contador.incrementar();       // +1
contador.incrementar(3);      // +3 (agora está 4)
contador.decrementar(2);      // -2 (agora está 2)
contador.zerar();             // 0

console.log(contador.valor);  // Saída: 0