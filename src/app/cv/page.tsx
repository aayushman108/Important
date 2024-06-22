import {
  CVHead,
  Education,
  Experience,
  Skills,
  Summary,
} from "@/components/cv";
import React from "react";
import "./_cv.scss";

export default function CV() {
  return (
    <div className="cv-page-container">
      <CVHead />
      <div className="cv-page">
        <div className="cv-page-left">
          <Summary />
          <Education />
          <Experience />
        </div>
        <div className="cv-page-right">
          <Skills />
        </div>
      </div>
    </div>
  );
}
