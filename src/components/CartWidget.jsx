// import { ClockCircleOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useContext } from "react";
import { carritoContexto } from "./CartConext.jsx";

export const CartWidget = () => {
  const valor = useContext(carritoContexto);
  console.log(valor);
  return (
    <Badge count={valor.cantProd}>
      <img
        src="shopping-cart.png"
        width="32"
        height="32"
        alt="Icono de carrito"
      />
    </Badge>
  );
};
