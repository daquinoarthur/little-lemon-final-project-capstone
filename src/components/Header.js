import { Container } from "./Container";
import { Nav } from "./Nav";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <Container>
        <a href="/">
          <img src="logo.svg" alt="Little Lemon Logo" />
        </a>
        <Nav />
      </Container>
    </header>
  );
}
