import React from "react";
import "./_skills.scss";
import { SKILLS } from "./constant";

export function Skills() {
  return (
    <div className="skills-container">
      <div className="skills">
        <h2 className="skills-heading">SKILLS</h2>
        <div className="divider"></div>
        <ul className="skills-list">
          {SKILLS.map((item) => (
            <li key={item.id}>
              {item.icon}
              {item.skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
