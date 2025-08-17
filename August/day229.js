let currentComponent = null;

function createElement(type, props, ...children) {
  return { type, props: props || {}, children };
}

function render(element, container) {
  const dom = element.type instanceof Function
    ? render(element.type(element.props || {}), container)
    : document.createElement(element.type);

  if (!(element.type instanceof Function)) {
    Object.keys(element.props || {}).forEach(prop => {
      if (prop.startsWith("on")) {
        const event = prop.substring(2).toLowerCase();
        dom.addEventListener(event, element.props[prop]);
      } else if (prop === "style" && typeof element.props[prop] === "object") {
        Object.assign(dom.style, element.props[prop]);
      } else {
        dom[prop] = element.props[prop];
      }
    });

    element.children.forEach(child => {
      render(child, dom);
    });
  }

  if (container) {
    container.appendChild(dom);
  }

  return dom;
}

// --- Estado (já tínhamos)
let states = [];
let stateIndex = 0;

function useState(initial) {
  const idx = stateIndex;
  states[idx] = states[idx] !== undefined ? states[idx] : initial;

  function setState(newVal) {
    states[idx] = typeof newVal === "function" ? newVal(states[idx]) : newVal;
    rerender();
  }

  stateIndex++;
  return [states[idx], setState];
}

// --- Novo: useEffect
let effects = [];
let effectIndex = 0;

function useEffect(callback, deps) {
  const idx = effectIndex;
  const old = effects[idx];
  let hasChanged = true;

  if (old) {
    const [_, oldDeps] = old;
    hasChanged = deps ? !deps.every((d, i) => d === oldDeps[i]) : true;
  }

  if (hasChanged) {
    setTimeout(callback, 0); // roda depois do render
    effects[idx] = [callback, deps];
  }

  effectIndex++;
}

// --- Rerender
function rerender() {
  stateIndex = 0;
  effectIndex = 0;
  document.getElementById("app").innerHTML = "";
  render(currentComponent, document.getElementById("app"));
}

function RoetRoot(component) {
  currentComponent = component;
  rerender();
}

// --- Exemplo de uso
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Efeito rodou! count =", count);
  }, [count]);

  return createElement("div", {}, 
    createElement("p", {}, `Count: ${count}`),
    createElement("button", { onClick: () => setCount(c => c + 1) }, "Increment")
  );
}

RoetRoot(createElement(Counter, null));