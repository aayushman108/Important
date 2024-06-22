import React from "react";
import "../cvHead/_cvHead.scss";
import {
  DESIGNATION,
  GITHUB,
  GITLAB,
  GMAIL,
  LOCATION,
  NAME,
  PHONE,
} from "./contant";
import Link from "next/link";

export function CVHead() {
  return (
    <div className="cv-head-container">
      <div className="cv-head">
        <h1 className="cv-head-name">{NAME}</h1>
        <h3 className="cv-head-designation">{DESIGNATION}</h3>
        <div className="cv-head-gmail-phone">
          <Link href={`mailto:${GMAIL}`} className="cv-head-gmail">
            {GMAIL}
          </Link>
          <Link href={`tel:${PHONE}`} className="cv-head-phone">
            {PHONE}
          </Link>
        </div>
        <div className="cv-head-github-gitlab">
          <Link href={GITHUB} className="cv-head-github">
            {GITHUB}
          </Link>
          <Link href={GITLAB} className="cv-head-gitlab">
            {GITLAB}
          </Link>
        </div>
        <div className="cv-head-location">{LOCATION}</div>
      </div>
      <figure className="cv-image"></figure>
    </div>
  );
}
