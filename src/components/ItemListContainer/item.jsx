import { Link } from "react-router-dom";

/* SE ENCARGA DE SER LA VISTA DE CADA CARD  */
const Item = ({ product }) => {
  return (
    <div className="card">
      <Link className="link" to={"/detail/" + product.id}>
        <div >
          <img className="image" src={product.image} alt="" />
        </div>
        <div className="infoContainer">
          <h2 className="productName"> {product.name} </h2>
          <p className="productPrice">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};
export default Item;
