import React, { useState } from "react";
import "../../styles/classes.css";

export const Classes = () => {

  const timeSlots = [
    "6:00am - 8:00am",
    "10:00am - 12:00am",
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
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleSchedule = (day, timeSlot) => {
    if (
      schedule.hasOwnProperty(day) &&
      schedule[day].hasOwnProperty(timeSlot)
    ) {
      let workout = schedule[day][timeSlot];
      return {
        workout: workouts.name,
        trainer: workouts.trainer,
        day: day,
        timeSlot: timeSlot,
      };
    } else {
      return {
        workout: "",
        trainer: "",
        day: day,
        timeSlot: timeSlot,
      };
    }
  };

  const schedule = {};
  schedule["Sunday"] = {
    "6:00am - 8:00am": workouts[0],
    "5:00pm - 7:00pm": workouts[3],
    "7:00pm - 9:00pm": workouts[4],
  },
  schedule["Monday"] = {
    "6:00am - 8:00am": workouts[0],
    "10:00am - 12:00am": workouts[3],
    "5:00pm - 7:00pm": workouts[1],
    "7:00pm - 9:00pm": workouts[4],
  };
  schedule["Tuesday"] = {
    "6:00am - 8:00am": workouts[0],
    "10:00am - 12:00am": workouts[3],
    "5:00pm - 7:00pm": workouts[1],
    "7:00pm - 9:00pm": workouts[4],
  };
  schedule["Wednesday"] = {
    "6:00am - 8:00am": workouts[0],
    "10:00am - 12:00am": workouts[3],
    "5:00pm - 7:00pm": workouts[1],
    "7:00pm - 9:00pm": workouts[4],
  };
  schedule["Thursday"] = {
    "6:00am - 8:00am": workouts[0],
    "10:00am - 12:00am": workouts[3],
    "5:00pm - 7:00pm": workouts[1],
    "7:00pm - 9:00pm": workouts[4],
  };
  schedule["Friday"] = {
    "6:00am - 8:00am": workouts[0],
    "10:00am - 12:00am": workouts[3],
    "5:00pm - 7:00pm": workouts[1],
    "7:00pm - 9:00pm": workouts[4],
  };
  schedule["Saturday"] = {
    "6:00am - 8:00am": workouts[0],
    "10:00am - 12:00am": workouts[3],
    "5:00pm - 7:00pm": workouts[1]
  };

  return (
    <section className="class-timetable-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="section-title d-flex justify-content-center">
              <h2>Our Classes</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="class-timetable">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {days.map((day, index) => (
                      <th key={index}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {handleSchedule}
                  {timeSlots.map((timeSlot, timeIndex) => (
                    <tr key={timeIndex} className="class-time">
                      <td>{timeSlot}</td>
                      {workouts.map((workout, workoutIndex) => (
                        <td key={workoutIndex} className="hover-bg ts-meta">
                          <button className="btn btn-bg-none">
                            <h5>{workout.name}</h5>
                            <span>{workout.trainer}</span>
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
