import { useState } from "react";
import Callendar from "./Callendar";

const App = () => {
  const [events, setEvents] = useState([
    { date: new Date(2024, 3, 12), task: "Playing" },
    { date: new Date(2024, 3, 12), task: "Reading" },
    { date: new Date(2024, 4, 18), task: "Shopping" },
    { date: new Date(2024, 4, 21), task: "Playing" },
    { date: new Date(2024, 4, 12), task: "Shopping" },
    { date: new Date(2024, 5, 2), task: "Reading" },
    { date: new Date(2024, 5, 19), task: "Cleaning" },
    { date: new Date(2024, 5, 21), task: "Writing" },
    { date: new Date(2024, 5, 1), task: "Shopping" },
    { date: new Date(2024, 5, 12), task: "Playing" },
    { date: new Date(2024, 6, 12), task: "Shopping" },
    { date: new Date(2024, 6, 2), task: "Washing" },
    { date: new Date(2024, 6, 2), task: "Cleaning" },
    { date: new Date(2024, 6, 2), task: "Writing" },
    { date: new Date(2024, 6, 18), task: "Playing" },
    { date: new Date(2024, 6, 28), task: "Playing" },
    { date: new Date(2024, 6, 28), task: "Writing" },
    { date: new Date(2024, 6, 19), task: "Playing" },
    { date: new Date(2024, 5, 23), task: "Reading" },
    { date: new Date(2024, 5, 21), task: "Walking" },
    { date: new Date(2024, 5, 9), task: "Gardening" },
    { date: new Date(2024, 7, 23), task: "Cooking" },
    { date: new Date(2024, 7, 15), task: "Painting" },
    { date: new Date(2024, 7, 15), task: "Cleaning" },
    { date: new Date(2024, 7, 23), task: "Reading" },
    { date: new Date(2024, 8, 15), task: "Painting" },
    { date: new Date(2024, 8, 15), task: "Shopping" },
    { date: new Date(2024, 8, 25), task: "Cleaning" },
    { date: new Date(2024, 8, 26), task: "Painting" },
    { date: new Date(2024, 9, 12), task: "Playing" },
    { date: new Date(2024, 9, 17), task: "Painting" },
    { date: new Date(2024, 9, 24), task: "Shopping" },
    { date: new Date(2024, 9, 4), task: "Painting" },
    { date: new Date(2024, 10, 4), task: "Painting" },
    { date: new Date(2024, 10, 16), task: "Playing" },
    { date: new Date(2024, 10, 29), task: "Reading" },
    { date: new Date(2024, 10, 19), task: "Painting" },
    { date: new Date(2024, 11, 14), task: "Shopping" },
    { date: new Date(2024, 11, 24), task: "Playing" },
    { date: new Date(2024, 11, 24), task: "Writing" },
    { date: new Date(2024, 11, 15), task: "Painting" },
    { date: new Date(2024, 11, 27), task: "Decorating" },
    { date: new Date(2025, 0, 24), task: "Painting" },
    { date: new Date(2025, 0, 28), task: "Shopping" },
    { date: new Date(2024, 0, 11), task: "Writing" },
    { date: new Date(2024, 0, 6), task: "Reading" },
  ]);
  const addEvent = (event) => {
    setEvents((prev) => [...prev, event]);
  };
  return (
    <div className="container md:p-10">
      <Callendar events={events} addEvent={addEvent} />
    </div>
  );
};

export default App;
