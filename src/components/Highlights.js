import { Button } from "./Button";
import { Container } from "./Container";
import { HighlightCard } from "./HighlightCard";
import "./Highlights.css";

export function Highlights() {
  return (
    <section className="highlights">
      <Container>
        <header className="highlights__header">
          <h2 className="highlights__title font__display">
            This weeks specials!
          </h2>
          <Button secondary>Online Menu</Button>
        </header>

        <div className="highlights__row">
          <HighlightCard
            title="Greek Salad"
            image="greek-salad.jpg"
            price="12.99"
          >
            The famous greek salad of crispy lettuce, peppers, olives ad our
            Chicago style fota cheese, garnished with crunchy gartic and
            rosemary croutons.
          </HighlightCard>

          <HighlightCard
            title="Bruschetta"
            image="restaurantfood.jpg"
            price="5.99"
          >
            Our Bruschetta is made from grilled bread that has been smeared with
            gartic and seasoned with salt and olive oil.
          </HighlightCard>

          <HighlightCard
            title="Lemon Desert"
            image="lemon-dessert.jpg"
            price="5.00"
          >
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can imagined.
          </HighlightCard>
        </div>
      </Container>
    </section>
  );
}
