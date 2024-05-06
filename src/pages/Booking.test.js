import { initializeTimes, updateTimes } from "./Booking";

test("initializeTimes returns an array of times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "2:00"];
  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

test("updateTimes returns an array of times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "2:00"];
  const times = updateTimes();
  expect(times).toEqual(expectedTimes);
});
