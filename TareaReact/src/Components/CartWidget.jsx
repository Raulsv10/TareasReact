// import { ClockCircleOutlined } from "@ant-design/icons";
import { Badge } from "antd";

export const CartWidget = () => {
  return (
    <Badge count={5}>
      <img
        src="shopping-cart.png"
        width="32"
        height="32"
        alt="Icono de carrito"
      />
    </Badge>
  );
};
