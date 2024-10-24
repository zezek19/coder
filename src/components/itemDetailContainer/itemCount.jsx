import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(1);

  const restasContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  return (
    <div className="cartContainer">
      <div className="buttonContainer">
        <button onClick={restasContador}>-</button>
        <h2>{contador}</h2>
        <button onClick={aumentarContador}>+</button>
      </div>
      <div className="addCartContainer">
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ItemCount;
