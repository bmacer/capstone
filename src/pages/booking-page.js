import BookingForm from "../components/booking-form.component";

const BookingPage = ({ availableTimes, selectedDate, setSelectedDate }) => {
  return (
    <>
      Booking Page
      <BookingForm
        availableTimes={availableTimes}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
};

export default BookingPage;
