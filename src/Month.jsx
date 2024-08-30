import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameYear,
  isToday,
  startOfMonth,
} from "date-fns";
import { useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Month = ({ year = 2024, month = 6, monthEvents = [], addEvent }) => {
  const [isAddEventInputVisible, setIsAddEventInputVisible] = useState(false);
  const [event, setEvent] = useState({ date: new Date(), task: "" });
  const handleSetNewEventDate = (day) => {
    if (
      !(
        isSameYear(new Date(), day) &&
        (new Date().getMonth() > day.getMonth() ||
          (new Date().getMonth() === day.getMonth() &&
            new Date().getDate() > day.getDate()))
      ) ||
      new Date().getFullYear() < day.getFullYear()
    ) {
      setIsAddEventInputVisible(true);
      setEvent((prev) => ({ ...prev, date: day }));
    }
  };
  const handleSetNewEventTask = (e) => {
    setEvent((prev) => ({ ...prev, task: e.target.value }));
  };
  const handleAddNewEvent = () => {
    event.task.trim() !== "" && addEvent(event);
    setIsAddEventInputVisible(false);
    setEvent({ date: new Date(), task: "" });
  };

  const date = new Date(year, month);
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
  const startingDayIndex = getDay(firstDayOfMonth);
  const eventsByDate = monthEvents.reduce((arr, event) => {
    const dataKey = format(event.date, "yyyy-MM-dd");
    if (!arr[dataKey]) {
      arr[dataKey] = [];
    }
    arr[dataKey].push(event);
    return arr;
  }, {});

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center p-4 md:pb-6">
          {format(date, "yyyy MMMM")}
        </h2>
      </div>
      <div>
        <p className="text-center text-gray-400 p-4 md:pb-6">
          Click on a date to add new event
        </p>
        {isAddEventInputVisible && (
          <div className="text-center py-4">
            <input
              type="text"
              placeholder="Enter the task"
              value={event.task}
              onChange={(e) => handleSetNewEventTask(e)}
              className="border-none outline-none w-1/2 md:w-1/3 p-2 text-black"
            />
            <button
              onClick={handleAddNewEvent}
              className="bg-pink-700 py-2 px-6 font-bold rounded-r"
            >
              Add
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-2xl font-bold py-2">
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return <div key={index} className=""></div>;
        })}
        {daysInMonth.map((day, index) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const todaysEvents = eventsByDate[dateKey] || [];
          return (
            <div
              key={index}
              className={`${
                isToday(day) && "bg-green-700"
              } border-2 rounded p-2 text-center`}
              onClick={() => handleSetNewEventDate(day)}
            >
              <span className="">{format(day, "d")}</span>
              {todaysEvents.map((event) => {
                return (
                  <div
                    key={event.task}
                    className={
                      (isSameYear(new Date(), day) &&
                        (new Date().getMonth() > day.getMonth() ||
                          (new Date().getMonth() === day.getMonth() &&
                            new Date().getDate() > day.getDate()))) ||
                      new Date().getFullYear() > day.getFullYear()
                        ? "text-slate-400"
                        : "bg-blue-700 rounded border mb-1"
                    }
                  >
                    {event.task}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
