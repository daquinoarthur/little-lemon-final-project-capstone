import { Link } from "react-router-dom";
import "./Nav.css";

export function Nav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className="main-nav__link" to="/">
            Home
          </Link>
        </li>

        <li className="main-nav__item">
          <Link className="main-nav__link" to="/about">
            About
          </Link>
        </li>

        <li className="main-nav__item">
          <Link className="main-nav__link" to="/menu">
            Menu
          </Link>
        </li>

        <li className="main-nav__item">
          <Link className="main-nav__link" to="/reservations">
            Reservations
          </Link>
        </li>

        <li className="main-nav__item">
          <Link className="main-nav__link" to="/order-online">
            Order Online
          </Link>
        </li>

        <li className="main-nav__item">
          <Link className="main-nav__link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
