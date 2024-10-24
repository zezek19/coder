import ItemCount from "./itemCount.jsx";

const ItemDetail = ({ product }) => {
    return (
        <div className='itemDetail'>
            <img src={product.image} alt="" />
            <div className='itemSpecs'>
                <h2 className="nameDetail">{product.name}</h2>
                <p className="descriptionDetail">{product.description}</p>
                <p className="priceDetail">${product.price}</p>
                <div>
                <ItemCount stock = {product.stock}></ItemCount>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail