import { Container } from "./Container";
import { TestimonialCard } from "./TestimonialCard";
import "./Testimonials.css";

export function Testimonials() {
  return (
    <section className="testimonials">
      <Container>
        <header className="testimonials__header">
          <h2 className="testimonials__title font__display">Testimonials</h2>
        </header>

        <div className="testimonials__row">
          <TestimonialCard image="emily.png" name="Emily S.">
            Little Lemon's cuisine is delightful. Highly recommended!
          </TestimonialCard>

          <TestimonialCard image="sarah.png" name="Sarah J.">
            Exquisite dining experience. A must-visit!
          </TestimonialCard>

          <TestimonialCard image="Lisa.png" name="Lisa B.">
            Exquisite dining experience. A must-visit!
          </TestimonialCard>

          <TestimonialCard image="maria.png" name="Maria G.">
            Little Lemon's ambiance is charming.
          </TestimonialCard>
        </div>
      </Container>
    </section>
  );
}
