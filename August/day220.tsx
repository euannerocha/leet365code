function createElement(type, props, ...children) {
  props = props || {};
  props.children = children.length > 0 ? children : null;
  return { type, props };
}

function render(vnode, container) {
  if (typeof vnode === "string" || typeof vnode === "number") {
    container.appendChild(document.createTextNode(vnode));
    return;
  }

  if (typeof vnode.type === "function") {
    const defaultProps = vnode.type.defaultProps || {};
    const mergedProps = { ...defaultProps, ...vnode.props };
    render(vnode.type(mergedProps), container);
    return;
  }

  const dom = document.createElement(vnode.type);

  if (vnode.props) {
    Object.keys(vnode.props).forEach(prop => {
      if (prop !== "children") {
        dom[prop] = vnode.props[prop];
      }
    });
  }

  if (vnode.props && vnode.props.children) {
    vnode.props.children.forEach(child => render(child, dom));
  }

  container.appendChild(dom);
}

// exemplo de componente com defaultProps
function Button(props) {
  return createElement("button", { onclick: props.onClick }, props.label);
}
Button.defaultProps = {
  label: "Click me",
  onClick: () => alert("Default click!")
};

// exemplo de componente usando children
function Box(props) {
  return createElement("div", { style: "padding:10px; border:1px solid black" }, props.children);
}

// app
const App = () =>
  createElement(
    "div",
    null,
    createElement(Button, null),
    createElement(Box, null, "Hello inside box!")
  );

// renderiza
render(createElement(App, null), document.getElementById("root"));