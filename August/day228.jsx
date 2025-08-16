import { createElement, render, useState } from "./roet.js";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onclick={() => setCount(count + 1)}>+</button>
      <button onclick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

render(<Counter />, document.getElementById("app"));