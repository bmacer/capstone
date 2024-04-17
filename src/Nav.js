import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <img className="logo" src="/Logo.svg" alt="Little Lemon Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
