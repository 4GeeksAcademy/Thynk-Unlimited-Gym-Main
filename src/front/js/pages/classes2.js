import React, { useState, useEffect } from "react";
import "../../styles/classes2.css";
import { ScaleLoader } from "react-spinners";

const ScheduleTable = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const timeSlots = [
    "6:00am - 8:00am",
    "10:00am - 12:00pm",
    "5:00pm - 7:00pm",
    "7:00pm - 9:00pm",
  ];
  const workouts = [
    { name: "Pilates", trainer: "Jenna Smith" },
    { name: "Cardio", trainer: "Jenna Smith" },
    { name: "Yoga", trainer: "Marcus Chen" },
    { name: "Circuits", trainer: "Alexis Taylor" },
    { name: "Boxing", trainer: "Ryan Johnson" },
    { name: "Body Building", trainer: "Robert Cage" },
    { name: "Karate", trainer: "Samantha Rodriguez" },
    { name: "No Class", trainer: "" },
  ];

  //  Loading effect
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const ScheduleRow = ({ day, timeSlot, workout }) => (
    <tr>
      <td></td>
      <td>{day}</td>
      <td>{timeSlot}</td>
      <td>
        {workout.name}
        {workout.trainer}
      </td>
    </tr>
  );

  // Function to get a random workout
  const getRandomWorkout = () => {
    return workouts[Math.floor(Math.random() * workouts.length)];
  };

  // Use state to manage the schedule
  const [schedule, setSchedule] = useState([]);

  // Populate the schedule
  useEffect(() => {
    const populatedSchedule = [];
    days.forEach((day) => {
      timeSlots.forEach((timeSlot) => {
        const workout = getRandomWorkout();
        populatedSchedule.push({ day, timeSlot, workout });
      });
    });
    setSchedule(populatedSchedule);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <ScaleLoader color="#e8c552" height={75} width={8} />
      ) : (
        <div className="class-timetable">
          <h1>Our Classes</h1>
          <table>
            <thead>
              <tr>
                <th></th>
                {days.map((day, index) => (
                  <th className="days-header" key={index}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((timeSlot, index) => (
                <tr key={index}>
                  <td className="time-slot">{timeSlot}</td>
                  {days.map((day, index) => {
                    const slot = schedule.find(
                      (slot) => slot.day === day && slot.timeSlot === timeSlot
                    );
                    return (
                      <td className="item-slot" key={index}>
                        {slot && slot.workout.name !== "No Class" ? (
                          <button className="btn">
                            <h5>{`${slot.workout.name}`}</h5>
                            <span>{`${slot.workout.trainer}`}</span>
                          </button>
                        ) : (
                          "No Class"
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ScheduleTable;
