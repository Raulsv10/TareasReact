import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./Context";

const ElementoDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const prodEncontrado = data.find((p) => p.id == id);
        setProducto(prodEncontrado);
      })
      .catch((error) => console.error("Error cargando el producto:", error));
  }, [id]);

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="d-flex flex-wrap d-inline justify-content-center m-2">
      <div className="card shadow-sm p-2 m-2">
        <div className="content">
          <h2>{producto.title}</h2>
          <img src={producto.image} alt={producto.title} />
          <p className="card-body">{producto.description}</p>
          <p className="precio">Precio: ${producto.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ElementoDetail;
