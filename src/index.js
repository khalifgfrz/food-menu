import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Warteg Romadon</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Menu Kita</h2>
      <Food />
      <Food />
      <Food />
      <Food />
    </div>
  );
}

function Footer() {
  return <footer>{new Date().getFullYear()} Warteg Romadon</footer>;
}

function Food() {
  return (
    <div>
      <img src="food/soto-betawi.jpg" alt="" width={100} height={70} />
      <h2>Soto Betawi</h2>
      <p>Soto Betawi ketinggalan jaman</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
