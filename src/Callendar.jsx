import { useState } from "react";
import Month from "./Month";

const Callendar = ({ events = [], addEvent }) => {
  const date = new Date();

  const [year, setYear] = useState(date.getFullYear());

  const [month, setMonth] = useState(date.getMonth());

  const changeMonth = (step) => {
    date.setMonth(month + step);
    setMonth(date.getMonth());
  };

  const changeYear = (step) => {
    date.setFullYear(year + step);
    setYear(date.getFullYear());
  };

  const prev = () => {
    const step = -1;
    if (month + step >= 0) {
      changeMonth(step);
    } else {
      changeYear(step);
      changeMonth(step);
    }
  };
  const next = () => {
    const step = 1;
    if (month + step <= 11) {
      changeMonth(step);
    } else {
      changeYear(step);
      changeMonth(step);
    }
  };
  const monthEvents = events.filter((event) => {
    if (event.date.getMonth() === month) return true;
  });

  return (
    <div className="container">
      <div className="flex justify-between text-2xl p-4 md:p-0">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <Month
        year={year}
        month={month}
        monthEvents={monthEvents}
        addEvent={addEvent}
      />
    </div>
  );
};

export default Callendar;
