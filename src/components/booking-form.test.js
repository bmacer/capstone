import { render, screen } from "@testing-library/react";
import BookingForm from "./booking-form.component";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={["1:00"]}
      selectedDate={"2022-02-02"}
      setSelectedDate={() => {}}
    />
  );
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
