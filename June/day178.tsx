function compose<T>(...fns: Array<(arg: T) => T>): (input: T) => T {
  return (input: T) => fns.reduceRight((acc, fn) => fn(acc), input);
}

const double = (x: number) => x * 2;
const square = (x: number) => x * x;

const process = compose(square, double);

console.log(process(3));