import { useContext } from "react";
import { carritoContexto } from "./CartConext.jsx";
import Datos from "./Datos";
import { db } from "../dbContext";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const Carrito = () => {
  const valor = useContext(carritoContexto);

  //   const handleClick = () => {
  //     const nuevoProducto = {
  //       category: "muebles",
  //       description:
  //         "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
  //       id: 11,
  //       price: 1899.99,
  //       thumbnail:
  //         "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
  //       title: "Annibale Colombo Bed",
  //     };

  //     const productosCollection = collection(db, "products");
  //     const miConsulta = addDoc(productosCollection, nuevoProducto);

  //     miConsulta
  //       .then(() => {
  //         console.log("Salio todo bien");
  //         toast.success("Producto agregado a la base de datos");
  //       })
  //       .catch(() => {
  //         console.log("Salio todo mal");
  //       });
  //   };

  //   const handleClickTraer = () => {
  //     const db = getFirestore(app);
  //     const productosCollection = collection(db, "productos");
  //     const query = getDocs(productosCollection);

  //     query
  //       .then((resultadoDeLaConsulta) => {
  //         console.log("Salio todo bien");
  //         console.log(resultadoDeLaConsulta);
  //       })
  //       .catch(() => {
  //         console.log("Salio todo mal");
  //       });
  //   };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <hr />
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col">Cantidad de productos</div>
            <div className="col">Total</div>
          </div>
          <div className="row">
            <div className="col">{valor.cantProd}</div>
            <div className="col">${valor.totalPrecio}</div>
          </div>
        </div>
      </div>
      <hr />
      {/* <ul>
        {valor.carrito.map((item, indice) => {
          return (
            <li key={indice}>
              <p>
                {item.title} - unidad : ${item.price}
              </p>
            </li>
          );
        })}
      </ul> */}
      <Datos />

      {/* <button onClick={handleClick}>agregar producto a DB</button>
      <button onClick={handleClickTraer}>traer productos de DB</button> */}
    </div>
  );
};

export default Carrito;
