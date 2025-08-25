// Global state
let currentComponent = null;
let hookIndex = 0;

// Store for all hooks
const componentHooks = new Map();

function createComponentInstance(component) {
  if (!componentHooks.has(component)) {
    componentHooks.set(component, []);
  }
  return componentHooks.get(component);
}

// Render function
function render(vdom, container) {
  container.innerHTML = "";
  container.appendChild(createDom(vdom));
}

// Create DOM nodes from VDOM
function createDom(vdom) {
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  if (typeof vdom.type === "function") {
    // Functional component
    currentComponent = vdom.type;
    hookIndex = 0;
    const props = { ...vdom.props, children: vdom.children };
    const childVdom = vdom.type(props);
    return createDom(childVdom);
  }

  // DOM element
  const el = document.createElement(vdom.type);

  // Props
  for (const [name, value] of Object.entries(vdom.props || {})) {
    if (name.startsWith("on") && typeof value === "function") {
      const eventType = name.slice(2).toLowerCase();
      el.addEventListener(eventType, value);
    } else {
      el.setAttribute(name, value);
    }
  }

  // Children
  vdom.children.forEach(child => el.appendChild(createDom(child)));

  return el;
}

// Our "h" function (like React.createElement)
function h(type, props, ...children) {
  return { type, props, children };
}

// useState
function useState(initialValue) {
  const hooks = createComponentInstance(currentComponent);

  if (hooks[hookIndex] === undefined) {
    hooks[hookIndex] = initialValue;
  }

  const stateIndex = hookIndex;
  const setState = (newValue) => {
    hooks[stateIndex] = newValue;
    rerender();
  };

  return [hooks[hookIndex++], setState];
}

// NEW: useEffect
function useEffect(callback, deps) {
  const hooks = createComponentInstance(currentComponent);

  const oldHook = hooks[hookIndex];
  const hasNoDeps = !deps;
  const hasChangedDeps = oldHook
    ? !deps.every((dep, i) => dep === oldHook.deps[i])
    : true;

  if (hasNoDeps || hasChangedDeps) {
    // Run after render
    setTimeout(() => {
      if (oldHook && oldHook.cleanup) {
        oldHook.cleanup();
      }
      const cleanup = callback();
      hooks[hookIndex] = { deps, cleanup };
    });
  } else {
    hooks[hookIndex] = oldHook;
  }

  hookIndex++;
}

// Example App
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran!", count);

    return () => {
      console.log("Cleanup for", count);
    };
  }, [count]);

  return h(
    "div",
    null,
    h("h1", null, "Count: ", count),
    h("button", { onClick: () => setCount(count + 1) }, "Increment")
  );
}

// Rerender
function rerender() {
  const root = document.getElementById("app");
  render(h(App, null), root);
}

// Initial render
rerender();