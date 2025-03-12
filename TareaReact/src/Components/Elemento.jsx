import { Link } from "react-router-dom";

const Elemento = (props) => {
  return (
    <div className="card menu shadow-sm p-2 m-2">
      <img src={props.producto.image} alt={props.producto.title} />
      <div className="content">
        <h3>
          {props.producto.title.length <= 30
            ? props.producto.title
            : props.producto.title.substring(0, 30) + "..."}
        </h3>
        <p className="card-body">
          {props.producto.description.length <= 150
            ? props.producto.description
            : props.producto.description.substring(0, 150) + "..."}
        </p>
        <p className="precio">${props.producto.price}</p>
        <Link
          to={`/productos/${props.producto.id}`}
          className="btn btn-primary"
        >
          Detalle
        </Link>
      </div>
    </div>
  );
};

export default Elemento;
