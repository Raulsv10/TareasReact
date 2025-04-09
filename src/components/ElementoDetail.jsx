import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../dbContext";
import { carritoContexto } from "./CartConext.jsx";
import Swal from "sweetalert2";

const ElementoDetail = () => {
  const { id } = useParams(); // ID from the URL
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const valor = useContext(carritoContexto);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lstproduct = collection(db, "products");
        const filtro = query(lstproduct, where("id", "==", Number(id)));
        const snapshot = await getDocs(filtro);
        const productosData = snapshot.docs.map((doc) => ({ ...doc.data() }));
        setProducto(productosData[0]);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!producto) {
    return <h2>⏳ Cargando producto...</h2>;
  }

  const handleClick = async () => {
    const productoCarrito = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      cantidad: cantidad,
      CarritoId: "1234567890",
    };
    console.log(productoCarrito);
    const carritoCollection = collection(db, "carrito");
    const miConsulta = addDoc(carritoCollection, productoCarrito);

    miConsulta
      .then(() => {
        console.log("Salio todo bien");
        valor.handleAgregar(productoCarrito);
        // toast.success("Producto agregado al carrito");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto agregado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        console.log("Salio todo mal: " + e);
      });
  };

  return (
    <div className="d-flex flex-wrap justify-content-center m-2">
      <div className="card shadow-sm p-2 m-2">
        <div className="content">
          <h2>{producto.title}</h2>
          <img src={producto.image} alt={producto.title} />
          <p className="card-body">{producto.description}</p>
          <p className="precio">Precio: ${producto.price}</p>
          <div>
            <hr />
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Cantidad"
                aria-label="Cantidad"
                aria-describedby="basic-addon2"
                value={cantidad}
                min={1}
                onChange={(e) => setCantidad(Number(e.target.value))}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  onClick={handleClick}
                >
                  agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementoDetail;
