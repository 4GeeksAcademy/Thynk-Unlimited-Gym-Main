import React, { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/classes2.css";
import { ScaleLoader } from "react-spinners";
import "animate.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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

  const getRandomWorkout = () =>
    workouts[Math.floor(Math.random() * workouts.length)];

  // Components
  const ScheduleRow = ({ day, timeSlot, workout }) => (
    <tr>
      <td></td>
      <td>{day}</td>
      <td>{timeSlot}</td>
      <td>{`${workout.name} ${workout.trainer}`}</td>
    </tr>
  );

  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e, workout) => {
    e.preventDefault();
    actions.login(email, password);
    console.log(store.token);
  };

  if (store.token && store.token !== "" && store.token !== undefined) {
    navigate("/login");
  }

  return (
    <div className="classesApp">
      {loading ? (
        <ScaleLoader id="loader" color="#e8c552" height={75} width={8} />
      ) : (
        <div className="class-timetable">
          <h1 className="class-header animate__animated animate__slideInLeft">
            Our Classes
          </h1>
          <h4 className="animate__animated animate__slideInRight">
            Sign up for a class today!
          </h4>
          <table className="animate__animated animate__rotateInUpRight animate__delay-1s">
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
                      <td className="item-slot" key={`${day}-${index}`}>
                        {slot && slot.workout.name !== "No Class" ? (
                          <Link to="/login">
                            <button className="btn" id="btn">
                              <h5>{slot.workout.name}</h5>
                              <span>{slot.workout.trainer}</span>
                            </button>
                          </Link>
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
