import { useEffect, useState } from "react";
import "./BookingForm.css";
import { Container } from "./Container";

export function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [sittingOption, setSittingOption] = useState("Standard");

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const todayString = `${year}-${month}-${day}`;
    setDate(todayString);
  }, []);

  const handleRadioChange = (event) => {
    setSittingOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ date, time, guests, occasion, sittingOption });
  };

  return (
    <section className="booking">
      <Container>
        <h2 className="font__display booking__title">
          Find a tagle for any occasion
        </h2>
        <form className="booking__form" onSubmit={handleSubmit}>
          <fieldset className="booking__form__fieldset">
            <div className="booking__form__group">
              <label
                className="booking__form__label font__section-title"
                htmlFor="res-date"
              >
                Choose date
              </label>
              <input
                className="booking__form__input booking__form__input--date"
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="booking__form__group">
              <label
                className="booking__form__label font__section-title"
                htmlFor="res-time"
              >
                Choose time
              </label>
              <select
                className="booking__form__input booking__form__input--time"
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="2:00">2:00</option>
              </select>
            </div>

            <div className="booking__form__group">
              <label
                className="booking__form__label font__section-title"
                htmlFor="guests"
              >
                Number of guests
              </label>
              <input
                className="booking__form__input booking__form__input--number"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div className="booking__form__group">
              <label
                className="booking__form__label font__section-title"
                htmlFor="occasion"
              >
                Occasion
              </label>
              <select
                className="booking__form__input booking__form__input--occasion"
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="booking__form__group booking__form__group--sitting-options">
              <legend className="font__section-title">Sitting Options</legend>

              <label className="booking__form__label">
                <span className="font__lead-text">Standard</span>
                <input
                  type="radio"
                  name="sitting-option"
                  value="Standard"
                  onChange={handleRadioChange}
                  checked={sittingOption === "Standard"}
                />
              </label>

              <label className="booking__form__label">
                <span className="font__lead-text">Outside</span>
                <input
                  type="radio"
                  name="sitting-option"
                  value="Outside"
                  onChange={handleRadioChange}
                  checked={sittingOption === "Outside"}
                />
              </label>
            </div>

            <input
              className="booking__form__input booking__form__input--submit"
              type="submit"
              value="Make Your reservation"
            />
          </fieldset>
        </form>
      </Container>
    </section>
  );
}
