import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import BookingPage from "./pages/booking-page";
import AboutPage from "./pages/about-page";
import ReservationsPage from "./pages/reservations-page";
import MenuPage from "./pages/menu-page";
import { useEffect, useState } from "react";

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00"]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    fetchAPI("2024-01-01").then((r) => {
      r.json().then((j) => {
        console.log("j");
        console.log(j);
      });
    });
    console.log(selectedDate);
    if (new Date(selectedDate) <= new Date()) {
      setAvailableTimes([]);
    } else {
      setAvailableTimes(["17:00", "18:00"]);
    }
  }, [selectedDate]);

  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route
          path="/reservations"
          element={
            <BookingPage
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              availableTimes={availableTimes}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
};

export default Main;
