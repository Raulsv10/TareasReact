import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import ElementoDetail from "./components/ElementoDetail";
import ImportProducts from "./components/impor";
import CarritoProvider from "./components/CartConext";
import Carrito from "./components/Carrito";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <CarritoProvider>
        <NavBar />
        {/* <ImportProducts /> */}
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
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/consulta" element={<h2>Consulta tu Pedido</h2>} />
          </Routes>
        </main>
      </CarritoProvider>
    </Router>
  );
}

export default App;
