import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Container } from "./Container";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <Container>
        <article className="hero__body">
          <h1 className="font__display hero__title">Little Lemon</h1>
          <h2 className="font__display--subtitle hero__subtitle">Chicago</h2>
          <p className="font__lead-text hero__description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reserve-a-table" className="hero__button">
            <Button className="hero__button">Reserve a Table</Button>
          </Link>
        </article>
        <img
          className="hero__image"
          src="restaurantfood.jpg"
          alt="Restaurant Food"
        />
      </Container>
    </section>
  );
}
