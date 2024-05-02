import "./Nav.css";

export function Nav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a className="main-nav__link" href="/">
            Home
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="/about">
            About
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="/menu">
            Menu
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="/reservations">
            Reservations
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="/order-online">
            Order Online
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
