import CartWidget from "./cartWidget"
import "./navbar.css"
import Logo from "../../assets/logo.avif"




const NavBar = () => {

  return (
    <nav className="navbar">
        <div className="brand">
            <img src={Logo}  alt="" />  
        </div>
        <ul>
            <li>Guantes</li>
            <li>Tibiales</li>
        </ul>
        <CartWidget/>  
    </nav>
  )
}

export default NavBar