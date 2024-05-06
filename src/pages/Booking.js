import { useReducer, useState } from "react";
import { BookingForm } from "../components/BookingForm";
import { Layout } from "../layouts/Layout";

export function updateTimes(date) {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "2:00"];
}

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "2:00"];
}

export function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <Layout>
        <BookingForm
          availableTimes={availableTimes}
          updateAvailableTimes={dispatch}
        />
      </Layout>
    </div>
  );
}
