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
import Image from "next/image";
import { FaGithub, FaGitlab, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

export function CVHead() {
  return (
    <div className="cv-head-container">
      <div className="cv-head">
        <h1 className="cv-head-name">{NAME}</h1>
        <h3 className="cv-head-designation">{DESIGNATION}</h3>
        <div className="cv-head-gmail-phone">
          <Link href={`mailto:${GMAIL}`} className="cv-head-gmail">
            <SiGmail />
            {GMAIL}
          </Link>
          <Link href={`tel:${PHONE}`} className="cv-head-phone">
            <FaPhoneAlt />
            {PHONE}
          </Link>
        </div>
        <div className="cv-head-github-gitlab">
          <Link href={GITHUB} className="cv-head-github">
            <FaGithub />
            {GITHUB}
          </Link>
          <Link href={GITLAB} className="cv-head-gitlab">
            <FaGitlab />
            {GITLAB}
          </Link>
        </div>
        <div className="cv-head-location">
          <FaLocationDot />
          {LOCATION}
        </div>
      </div>
      <figure className="cv-image">
        <Image src="/aayushmanSharma.jpg" fill alt="Aayushman Sharma" />
      </figure>
    </div>
  );
}
