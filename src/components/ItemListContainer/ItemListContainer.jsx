import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import ItemList from "./itemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

/* SE ENCARGA DE TRAER LA DATA Y GUARDARLA EN VARIABLE DE ESTADO */
const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  // useParams funciona para capturar los parametros dinamicos en este caso idCategory utilizado en app.jsx
  const { idCategory } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        //SI ID CATEGORY EXISTE
        if (idCategory) {
          //FILTRAMOS LA DATA POR ESA CATEGORIA
          //CADA PRODUCTO QUE TENGA LA MISMA CATEGORIA QUE LA CATEGORIA QUE SE RECIBE POR PARAMETRO (idCategory) SE GUARDA EN filterProducts
          const filterProducts = data.filter(
            (product) => product.category === idCategory
          );
          setProducts(filterProducts);
        } else {
          //GUARDAMOS TODOS LOS PRODUCTOS
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });

    // CADA VEZ QUE idCategory CAMBIE DE RUTA SE VA A VOLVER A EJECUTAR useEffect
  }, [idCategory]);

  return (
    <div >
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
