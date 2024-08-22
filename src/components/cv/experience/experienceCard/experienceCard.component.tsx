import React from "react";
import "./_experienceCard.scss";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

type IContent = {
  subTitle: string;
  subContent: string;
  link: string;
};
interface Props {
  item: {
    id: number;
    designation: string;
    company: string;
    date: string;
    location: string;
    link: string;
    content: {
      id: string;
      title?: string;
      text?: string;
      link?: string;
      scontent?: IContent[];
    }[];
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
          {props.item.content.map((item) =>
            item.title ? (
              <li key={item.id}>
                {item.text}{" "}
                {item.link && <Link href={item.link}>~ {item.link}</Link>}
              </li>
            ) : (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <ul>
                  {item?.scontent?.map((item) => (
                    <li key={item.subTitle}>
                      <strong>{`${item.subTitle}:`}</strong>
                      {item.subContent}
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
{
}
