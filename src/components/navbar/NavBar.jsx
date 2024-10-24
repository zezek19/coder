import CartWidget from "./cartWidget";
import "./navbar.css";
import Logo from "../../assets/logo.avif";
import { Link } from "react-router-dom";

const NavBar = () => {




  return (
    <nav className="navbar">

      <div className="brand">
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
      </div>


      <ul className="categories">
        <li> <Link to="/category/guantes"> Guantes  </Link> </li>
        <li> <Link to="/category/tibiales"> Tibiales  </Link> </li>
        <li> <Link to="/category/bucales"> Bucales </Link> </li>
      </ul>


      <CartWidget />
    </nav>
  );
};

export default NavBar;
