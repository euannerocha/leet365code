let currentRoot = null;

function createElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.flat()
  };
}

function render(vnode, container) {
  container.innerHTML = '';
  currentRoot = () => render(vnode, container);

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    container.appendChild(document.createTextNode(vnode));
    return;
  }

  const el = document.createElement(vnode.type);

  for (const [key, value] of Object.entries(vnode.props)) {
    el.setAttribute(key, value);
  }

  vnode.children.forEach(child => render(child, el));

  container.appendChild(el);
}

function reactive(value) {
  let _val = value;
  const listeners = [];

  function get() {
    return _val;
  }

  function set(newVal) {
    _val = newVal;
    listeners.forEach(fn => fn());
  }

  function subscribe(fn) {
    listeners.push(fn);
  }

  return {
    get,
    set,
    subscribe
  };
}

function useReactive(reactiveVar) {
  reactiveVar.subscribe(() => {
    if (currentRoot) currentRoot();
  });
  return reactiveVar;
}