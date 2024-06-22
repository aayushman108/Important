import React from "react";
import "./_experience.scss";
import { EXPERIENCE } from "./constant";
import ExperienceCard from "./experienceCard/experienceCard.component";

export function Experience() {
  return (
    <div className="experience-container">
      <div className="experience">
        <h2 className="experience-heading">EXPERIENCE</h2>
        <div className="divider"></div>
        <div className="experience-content">
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
