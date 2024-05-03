import { Container } from "./Container";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__row">
          <nav className="footer__nav">
            <h4 className="footer__column-title font__display--subtitle">
              Doormate
              <br />
              Navigation
            </h4>

            <ul className="footer__nav__list">
              <li className="footer__nav__item">
                <a className="footer__nav__link font__highlight-text" href="/">
                  Home
                </a>
              </li>

              <li className="footer__nav__item">
                <a
                  className="footer__nav__link font__highlight-text"
                  href="/about"
                >
                  About
                </a>
              </li>

              <li className="footer__nav__item">
                <a
                  className="footer__nav__link font__highlight-text"
                  href="/menu"
                >
                  Menu
                </a>
              </li>

              <li className="footer__nav__item">
                <a
                  className="footer__nav__link font__highlight-text"
                  href="/reservations"
                >
                  Reservations
                </a>
              </li>

              <li className="footer__nav__item">
                <a
                  className="footer__nav__link font__highlight-text"
                  href="/order-online"
                >
                  Order Online
                </a>
              </li>

              <li className="footer__nav__item">
                <a
                  className="footer__nav__link font__highlight-text"
                  href="/login"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>

          <article className="footer__contact">
            <h4 className="footer__column-title font__display--subtitle">
              Contact
            </h4>

            <h5 className="footer__subtitle font__display--subtitle">
              Address:
            </h5>

            <address className="footer__address">
              <p className="footer__address__line font__highlight-text">
                Little Lemon
              </p>

              <p className="footer__address__line font__highlight-text">
                123 Culinary Lane
              </p>

              <p className="footer__address__line font__highlight-text">
                City of Flavors, State 12345
              </p>

              <p className="footer__address__line font__highlight-text">
                United States
              </p>
            </address>

            <h5 className="footer__subtitle footer__phone-number font__display--subtitle">
              Phone Number:
            </h5>

            <p className="footer__phone font__highlight-text">
              +1 (123) 456-7890
            </p>

            <h5 className="footer__subtitle footer__email font__display--subtitle">
              Email:
            </h5>

            <p className="footer__email-address font__highlight-text">
              info@littelemonrestauant.com
            </p>
          </article>

          <article className="footer__social-media">
            <h4 className="footer__column-title font__display--subtitle">
              Social Media
            </h4>

            <h5 className="footer__subtitle footer__instagram font__display--subtitle">
              Instagram:
            </h5>

            <p className="footer__instagram-link font__highlight-text">
              @littelemonrestaurant
            </p>

            <h5 className="footer__subtitle footer__instagram font__display--subtitle">
              Facebook:
            </h5>

            <p className="footer__instagram-link font__highlight-text">
              /littelemonrestaurant
            </p>

            <h5 className="footer__subtitle footer__facebook-link font__display--subtitle">
              Twitter:
            </h5>

            <p className="footer__twitter-link font__highlight-text">
              @LittleLemonR
            </p>
          </article>
        </div>
      </Container>
    </footer>
  );
}
