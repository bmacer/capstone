import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import BookingPage from "./pages/booking-page";
import AboutPage from "./pages/about-page";
import ReservationsPage from "./pages/reservations-page";
import MenuPage from "./pages/menu-page";

const Main = () => {
  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
