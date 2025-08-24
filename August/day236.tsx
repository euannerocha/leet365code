// trying to Apple onclick at roet

const App = () => {
  const [count, setCount] = Roet.useState(0);

  return Roet.createElement("div", null,
    Roet.createElement("h1", null, "Roet Counter: ", count),
    Roet.createElement("button", { onClick: () => setCount(count + 1) }, "Increment")
  );
};

Roet.render(App(), document.getElementById("root"));