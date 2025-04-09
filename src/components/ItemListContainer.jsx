import { useEffect, useState } from "react";
import { db } from "../dbContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Elemento from "./Elemento";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const params = useParams(); // Captura la categoría de la URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lstproduct = collection(db, "products");
        let snapshot;

        if (!params.categoria) {
          // Sin categoría = todos los productos
          snapshot = await getDocs(lstproduct);
        } else {
          // Filtrar por categoría
          const filtro = query(
            lstproduct,
            where("category", "==", params.categoria)
          );
          snapshot = await getDocs(filtro);
        }
        const productosData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProductos(productosData);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchData();
  }, [params.categoria]);

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
};
