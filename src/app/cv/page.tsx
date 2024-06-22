import { CVHead, Education, Summary } from "@/components/cv";
import React from "react";

export default function CV() {
  return (
    <div className="cv-page">
      <CVHead />
      <Summary />
      <Education />
    </div>
  );
}
