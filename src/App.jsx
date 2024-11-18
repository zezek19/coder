import "./App.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/cart/Cart.jsx";
import Checkout from "./components/checkout/checkout.jsx";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" />

          <Routes>
            <Route path="/" element={<ItemListContainer />} /> 
            <Route path="/" element={<ItemListContainer />} /> 
            {/* idCategory funciona como parametro dinamico para no repetir codigo innecesario */}
            <Route path="/category/:idCategory"element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element= {<Checkout/>}  />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
