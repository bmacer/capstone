import { useReducer, useState } from "react";

const responseReducer = (state, action) => {
  switch (action.action) {
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_TIME":
      return { ...state, time: action.time };
    default:
      return state;
  }
};

const INITIAL_FORM = {
  date: new Date().toISOString().slice(0, 10),
  time: "18:00",
};

// Component
const BookingForm = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(responseReducer, INITIAL_FORM);

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      {JSON.stringify(state)}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={state.date}
        onChange={(e) => {
          console.log(e);
          dispatch({ action: "SET_DATE", payload: e.target.value });
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) => dispatch({ action: "SET_TIME", time: e.target.value })}
        value={state.time}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
