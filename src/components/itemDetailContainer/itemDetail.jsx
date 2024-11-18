import ItemCount from "./itemCount.jsx";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addProductInCart } = useContext(CartContext);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };

    addProductInCart(productCart);
    setShowItemCount(false);
  };

  return (
    <div className="item-detail">
      <img className="imageProduct" src={product.image} alt="" />
      <div className="item-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="price-detail">${product.price}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {showItemCount === true ? (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        ) : (
          <Link to="/cart" className="button-end-buy">
            Finalizar compra
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
