#The following code is the same as yesterday, but now I'm improving the render function

function render(vnode, container) {
  container.innerHTML = '';
  currentRoot = () => render(vnode, container);

  mount(vnode, container);
}

function mount(vnode, container) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    container.appendChild(document.createTextNode(vnode));
    return;
  }

  // 🧠 Suporte a componentes funcionais
  if (typeof vnode.type === 'function') {
    mount(vnode.type(vnode.props || {}), container);
    return;
  }

  const el = document.createElement(vnode.type);

  for (const [key, value] of Object.entries(vnode.props || {})) {
    if (key.startsWith('on') && typeof value === 'function') {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      el.setAttribute(key, value);
    }
  }

  vnode.children.forEach(child => mount(child, el));

  container.appendChild(el);
}