import "./TestimonialCard.css";

export function TestimonialCard({ name, image, children }) {
  return (
    <article className="testimonial-card">
      <header className="testimonial-card__header">
        <img
          className="testimonial-card__image"
          src={image}
          alt={`Testimonial from ${name}`}
        />
        <h4 className="testimonial-card__name font__card-title">{name}</h4>
      </header>
      <p className="testimonial-card__testimony font__highlight-text">
        {children}
      </p>
    </article>
  );
}
