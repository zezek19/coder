import Item from "./item"

/*RECIBE LA VARIABLE DE ESTADO (products) Y LO MAPEA   */
            

const ItemList = ({products}) => {
  return (
    <div className="main">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))
      }
    </div>
  );
};


export default ItemList