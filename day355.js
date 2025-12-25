function asteroidCollision(asteroids) {
  const stack = [];

  for (let a of asteroids) {
    while (
      stack.length &&
      a < 0 &&
      stack[stack.length - 1] > 0
    ) {
      const top = stack[stack.length - 1];
      if (top < -a) stack.pop();
      else if (top === -a) {
        stack.pop();
        a = 0;
      } else {
        a = 0;
      }
    }

    if (a !== 0) stack.push(a);
  }

  return stack;
}