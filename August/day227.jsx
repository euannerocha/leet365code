// App.jsx
import React from "react";

// Header Component
function Header({ title }) {
  return (
    <header style={{ background: "#282c34", padding: "1rem", color: "#fff" }}>
      <h1>{title}</h1>
    </header>
  );
}

// Main Component (usando children)
function Main({ children }) {
  return (
    <main style={{ padding: "1rem" }}>
      {children}
    </main>
  );
}

// Footer Component
function Footer({ year }) {
  return (
    <footer style={{ background: "#282c34", padding: "1rem", color: "#fff" }}>
      <p>© {year} - Todos os direitos reservados</p>
    </footer>
  );
}

// App Component
export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header title="Meu Primeiro App com Vários Componentes" />

      <Main>
        <p>Blah</p>
      </Main>

      <Footer year={2025} />
    </div>
  );
}