import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } =
    useContext(CartContext);

  //ESTO SE EJECUTA CUANDO EL CARRITO ESTA VACIO
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2 className="title-empty-cart">No hay productos en el carrito</h2>
        <Link to="/" className="button-home-empty-cart">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="title-cart">Productos en el carrito</h1>
      {cart.map((productCart) => (
        <div className="item-cart" key={productCart.id}>
          <img className="img-item-cart" src={productCart.image} alt="" />
          <p className="text-item-cart">{productCart.name}</p>
          <p className="text-item-cart">cantidad: {productCart.quantity}</p>
          <p className="text-item-cart">
            {" "}
            ${productCart.price * productCart.quantity}{" "}
          </p>
          <button
            className="delete-item-cart"
            onClick={() => deleteProductById(productCart.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <button className="button-delete-cart" onClick={deleteCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
