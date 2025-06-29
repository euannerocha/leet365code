function evaluate(expr: string): number {
  const tokens = expr.match(/\d+|\+|\-|\*|\/||/g) ?? [];
  let i = 0;

  function parseExpr(): number {
    let result = parseTerm();
    while (tokens[i] === '+' || tokens[i] === '-') {
      const op = tokens[i++];
      const term = parseTerm();
      result = op === '+' ? result + term : result - term;
    }
    return result;
  }

  function parseTerm(): number {
    let result = parseFactor();
    while (tokens[i] === '*' || tokens[i] === '/') {
      const op = tokens[i++];
      const factor = parseFactor();
      result = op === '*' ? result * factor : result / factor;
    }
    return result;
  }

  function parseFactor(): number {
    const token = tokens[i++];
    if (token === '(') {
      const value = parseExpr();
      i++; 
      return value;
    }
    return parseFloat(token);
  }

  return parseExpr();
}

console.log(evaluate("2 + 3 * (4 - 1) / 3"));