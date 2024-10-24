import "./App.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"oli"}/> }/>
    {/* idCategory funciona como parametro dinamico para no repetir codigo innecesario */}
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/> 
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  