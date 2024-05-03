import "./About.css";
import { Container } from "./Container";

export function About() {
  return (
    <section className="about">
      <Container>
        <article className="about__body">
          <h2 className="about__title font__display">About Us</h2>
          <h3 className="about__location font__display--subtitle">Chicago</h3>
          <p className="about__text font__highlight-text">
            Little Lemon is a vibrant culinary haven nestled in the heart of the
            city. Our restaurant is ren owned for its innovative fusion of
            flavors, where traditional meets modern. We pride ourselves on our
            commitment to using fresh, locally sourced ingredients to create
            dishes that are both delicious and healthy.
          </p>
        </article>
        <div className="about__images">
          <img src="about-2.png" alt="About 2" className="about__image" />
          <img src="about-1.png" alt="About 1" className="about__image" />
        </div>
      </Container>
    </section>
  );
}
