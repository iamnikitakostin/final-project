import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";


test("Time is there & can reserve", () => {
  render(<App />);

  const link = screen.getByText("Reservations");
  fireEvent.click(link);

  const time = screen.getByLabelText("Time");
  fireEvent.click(time)

  const agree = screen.getByLabelText("I accept the booking policy.");
  fireEvent.click(agree)

  const continueBtn = screen.getByText("Make Your reservation");
  fireEvent.click(continueBtn)

  const logo = screen.getByAltText("logo");

  expect(logo).toBe;
});
