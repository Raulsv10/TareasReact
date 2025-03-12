import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Elemento from "./Elemento";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const params = useParams(); // Captura la categoría de la URL

  useEffect(() => {
    fetch(params.id === undefined ? "/products.json" : `/${params.id}.json`)
      .then((res) => res.json())
      .then((data) => {
        if (params.categoria) {
          // Filtra los productos por categoría
          const filtrados = data.filter(
            (p) => p.category.toLowerCase() == params.categoria.toLowerCase()
          );
          setProductos(filtrados);
        } else {
          setProductos(data);
        }
      })
      .catch((error) => console.error("Error cargando los productos:", error));
  }, [params]);

  return (
    <div className="d-flex flex-wrap justify-content-center m-2">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Elemento key={producto.id} producto={producto} />
        ))
      ) : (
        <h2>No hay productos en esta categoría</h2>
      )}
    </div>
  );
  // const [resultado, setResultado] = useState([]);
  // const params = useParams(); //{}

  // useEffect(() => {
  //   fetch(params.id === undefined ? "/products.json" : `/${params.id}.json`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setResultado(res);
  //     });
  // }, [params.id]);

  // return (
  //   <div className="d-flex flex-wrap d-inline justify-content-center m-2">
  //     {resultado.map((producto) => {
  //       return <Elemento key={producto.id} producto={producto}></Elemento>;
  //     })}
  //   </div>
  // );
};
