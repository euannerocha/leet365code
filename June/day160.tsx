function evaluateExpression(expr: string): number {
  const tokens = expr.replace(/\s+/g, '').match(/\d+|[+\-*/]/g);
  if (!tokens) return 0;

  const stack: number[] = [];
  let current = 0;
  let operator = '+';

  while (current < tokens.length) {
    const token = tokens[current];

    if (!isNaN(Number(token))) {
      const num = Number(token);
      if (operator === '+') stack.push(num);
      else if (operator === '-') stack.push(-num);
      else if (operator === '*') stack.push(stack.pop()! * num);
      else if (operator === '/') stack.push(Math.trunc(stack.pop()! / num));
    } else {
      operator = token;
    }

    current++;
  }

  return stack.reduce((a, b) => a + b, 0);
}

const input = "3+5 / 2*4 - 1";
const result = evaluateExpression(input);
console.log(result);