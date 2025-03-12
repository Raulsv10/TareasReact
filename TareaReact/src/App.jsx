import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/Nabvar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./Components/ItemListContainer";
import ElementoDetail from "./components/ElementoDetail";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h2>Bienvenido</h2>} />
          <Route path="/productos/" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<ElementoDetail />} />
          <Route
            path="/productos/categoria/:categoria"
            element={<ItemListContainer />}
          />
          <Route path="/nosotros" element={<h2>Sobre Nosotros</h2>} />
          <Route path="/carrito" element={<h2>Carrito de Compras</h2>} />
          <Route path="/consulta" element={<h2>Consulta tu Pedido</h2>} />
        </Routes>

        {/* <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
         <h1>Vite + React</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </main>
    </Router>
  );
}

export default App;
