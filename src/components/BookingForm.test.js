import { render, screen } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const heading = screen.getByRole("heading", {
    name: /find a table for any occasion/i,
  });
  expect(heading).toBeInTheDocument();
});
