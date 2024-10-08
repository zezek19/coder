
import './App.css'
import NavBar from "./components/navbar/navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <div>
      <NavBar/>
      <ItemListContainer   saludo={"mi ecommerce"} />
    </div>
  )
}

export default App
