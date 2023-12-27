import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/category/jewelery">
        Jewelery
        </Link>
        <Link className="li" to="/category/electronics">
          Electronics
        </Link>
        <Link className="li" to="/about">
          Informacion
        </Link>
        <Link className="li" to="/contact">
          Contacto
        </Link>

      </ul>
    </nav>
  );
};

export default NavBar;
