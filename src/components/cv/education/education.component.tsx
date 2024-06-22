import React from "react";
import "./_education.scss";
import { COURSE, DATE, INSTITUTE, LOCATION } from "./constant";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export function Education() {
  return (
    <div className="education-container">
      <div className="education">
        <h2 className="education-heading">EDUCATION</h2>
        <div className="divider"></div>
        <h2 className="education-course">{COURSE}</h2>
        <h3 className="education-institute">{INSTITUTE}</h3>
        <div className="education-date-location">
          <div className="education-date">
            <MdDateRange />
            {DATE}
          </div>
          <div className="education-location">
            <FaLocationDot />
            {LOCATION}
          </div>
        </div>
      </div>
    </div>
  );
}
