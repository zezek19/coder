
import "./cartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const CartWidget = () => {
  const {totalQuantity}  = useContext(CartContext)
   const quantity = totalQuantity()

  return (
    <Link to= "/cart" className="cartwidget">
          <FontAwesomeIcon className="cartIcon" icon={faCartShopping} />
          <p className="number-cartwidget">{ quantity >= 1 && quantity }</p>
    </Link>
  );
};

export default CartWidget;
