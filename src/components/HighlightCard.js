import { Button } from "./Button";
import { Price } from "./Price";
import "./HighlightCard.css";

export function HighlightCard({ title, children, image, price }) {
  return (
    <div className="highlight-card">
      <img src={image} alt={title} className="highlight-card__image" />

      <article className="highlight-card__body">
        <header className="highlight-card__header">
          <h3 className="highlight-card__title">{title}</h3>
          <Price price={price} />
        </header>

        <div className="highlight-card__description font__highlight-text">
          {children}
        </div>

        <footer className="highlight-card__footer">
          <Button noBg>Order a delivery</Button>
        </footer>
      </article>
    </div>
  );
}
