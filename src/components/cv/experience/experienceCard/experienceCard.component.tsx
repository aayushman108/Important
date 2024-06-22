import React from "react";
import "./_experienceCard.scss";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

interface Props {
  item: {
    id: number;
    designation: string;
    company: string;
    date: string;
    location: string;
    link: string;
    content: { id: string; text: string }[];
  };
}
export default function ExperienceCard(props: Props) {
  return (
    <div className="experience-card-container">
      <div className="experience-card">
        <h3 className="experience-card-designation">
          {props.item.designation}
        </h3>
        <h4 className="experience-card-company">{props.item.company}</h4>
        <div className="experience-card-date-location">
          <div className="experience-card-date">
            <MdOutlineDateRange />
            {props.item.date}
          </div>
          <div className="experience-card-location">
            <FaLocationDot />
            {props.item.location}
          </div>
        </div>
        <Link className="experience-card-link" href={props.item.link}>
          <FaLink />
          {props.item.link}
        </Link>
        <ul className="experience-card-list">
          {props.item.content.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
