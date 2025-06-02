type RandomFunction<T> = () => T;

function caos<T>(input: T): T {
  const rand = Math.random();
  if (typeof input === "number") {
    return ((input as number) * rand * 42) as any;
  }
  if (typeof input === "string") {
    return input.split('').sort(() => 0.5 - rand).join('') as any;
  }
  if (typeof input === "boolean") {
    return (rand > 0.5) as any;
  }
  return input;
}

function loopInfinitoLegalmentePermitido(msg: string): void {
  let i = 0;
  const intervalo = setInterval(() => {
    console.log(`${msg} (${i++})`);
    if (Math.random() > 0.97) clearInterval(intervalo);
  }, 100);
}

function fábricaDeFunçõesMaluquinhas(): RandomFunction<any> {
  const funções: RandomFunction<any>[] = [
    () => caos("banana"),
    () => caos(12345),
    () => caos(true),
    () => () => "camada extra de função",
  ];
  return () => funções[Math.floor(Math.random() * funções.length)]();
}

function recursãoInútil(n: number): string {
  if (n <= 0) return "🌀";
  return "🌀" + recursãoInútil(n - 1);
}

// Executando o caos
console.log("Caos número:", caos(13.37));
console.log("Caos string:", caos("TypeScript"));
console.log("Caos booleano:", caos(true));

loopInfinitoLegalmentePermitido("Você pediu loucura");

const fn = fábricaDeFunçõesMaluquinhas();
console.log("Função gerada aleatoriamente:", fn());

console.log("Recursão inútil de nível 5:", recursãoInútil(5));