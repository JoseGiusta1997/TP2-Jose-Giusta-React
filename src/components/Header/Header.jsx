import "./Header.css";

import { Link } from "react-router-dom";

import img from "../../assets/logo.png";
import logo from "../../assets/azul.png";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={img} alt="Titulo" />.
        <img src={logo} alt="Logo" />.
      </Link>
    </div>
  );
};

export default Header;
