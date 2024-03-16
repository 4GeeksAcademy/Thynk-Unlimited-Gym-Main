import React from "react";
import "../../styles/classes.css";

export const Classes = () => {

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
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="class-time">6:00am - 8:00am</td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="workout"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Pilates</h5>
                        <span>Jenna Smith</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="fitness">
                      <button className="btn btn-bg-none">
                        <h5>Cardio</h5>
                        <span>Jenna Smith</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="workout"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Yoga</h5>
                        <span>Marcus Chen</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="fitness">
                      <button className="btn btn-bg-none">
                        <h5>Circuits</h5>
                        <span>Alexis Taylor</span>
                      </button>
                    </td>
                    <td className="dark-bg blank-td"></td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <button className="btn btn-bg-none">
                        <h5>Boxing</h5>
                        <span>Ryan Johnson</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="workout"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Body Building</h5>
                        <span>Robert Cage</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="class-time">10:00am - 12:00am</td>
                    <td className="blank-td"></td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="fitness"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Circuits</h5>
                        <span>Alexis Taylor</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="workout">
                      <button className="btn btn-bg-none">
                        <h5>Pilates</h5>
                        <span>Jenna Smith</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="motivation"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Cardio</h5>
                        <span>Jenna Smith</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="workout">
                      <button className="btn btn-bg-none">
                        <h5>Body Building</h5>
                        <span>Robert Cage</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="motivation"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Karate</h5>
                        <span>Samantha Rodriguez</span>
                      </button>
                    </td>
                    <td className="blank-td"></td>
                  </tr>
                  <tr>
                    <td className="class-time">5:00pm - 7:00pm</td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="fitness"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Boxing</h5>
                        <span>Ryan Johnson</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <button className="btn btn-bg-none">
                        <h5>Karate</h5>
                        <span>Samantha Rodriguez</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="workout"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Body Building</h5>
                        <span>Robert Cage</span>
                      </button>
                    </td>
                    <td className="blank-td"></td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="workout"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Yoga</h5>
                        <span>Marcus Chen</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <button className="btn btn-bg-none">
                        <h5>Cardio</h5>
                        <span>Jenna Smith</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="fitness"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Circuits</h5>
                        <span>Alexis Taylor</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="class-time">7:00pm - 9:00pm</td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <button className="btn btn-bg-none">
                        <h5>Cardio</h5>
                        <span>Jenna Smith</span>
                      </button>
                    </td>
                    <td className="dark-bg blank-td"></td>
                    <td className="hover-bg ts-meta" data-tsmeta="fitness">
                      <button className="btn btn-bg-none">
                        <h5>Boxing</h5>
                        <span>Ryan Johnson</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="workout"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Yoga</h5>
                        <span>Marcus Chen</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <button className="btn btn-bg-none">
                        <h5>Karate</h5>
                        <span>Samantha Rodriguez</span>
                      </button>
                    </td>
                    <td
                      className="dark-bg hover-bg ts-meta"
                      data-tsmeta="fitness"
                    >
                      <button className="btn btn-bg-none">
                        <h5>Boxing</h5>
                        <span>Ryan Johnson</span>
                      </button>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="workout">
                      <button className="btn btn-bg-none">
                        <h5>Pilates</h5>
                        <span>Jenna Smith</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
