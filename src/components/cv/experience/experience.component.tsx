import React from "react";
import "./_experience.scss";
import { EXPERIENCE } from "./constant";
import ExperienceCard from "./experienceCard/experienceCard.component";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLink, FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export function Experience() {
  return (
    <div className="experience-container">
      <div className="experience">
        <h2 className="experience-heading">EXPERIENCE</h2>
        <div className="divider"></div>
        <div className="experience-content">
          {/* {EXPERIENCE.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))} */}
          <div className="experience-card-container">
            <div className="experience-card">
              <h3 className="experience-card-designation">
                Associate Software Engineer
              </h3>
              <h4 className="experience-card-company">
                Codniv Innovations Pvt. Ltd.
              </h4>
              <div className="experience-card-date-location">
                <div className="experience-card-date">
                  <MdOutlineDateRange />
                  02/2024 - Present
                </div>
                <div className="experience-card-location">
                  <FaLocationDot />
                  Baluwatar, Kathmandu
                </div>
              </div>
              <Link
                className="experience-card-link"
                href={"https://gitlab.com/aayushman108"}
              >
                <FaLink />
                https://gitlab.com/aayushman108
              </Link>
              <ul className="experience-card-list">
                <li>
                  <h4>Collaborative and Independent UI Development</h4>
                  <ul>
                    <li>
                      Gained experience by working on various projects with a
                      skilled and experienced team, which helped me learn a lot
                      and improve my teamwork skills.
                    </li>
                    <li>
                      Demonstrated the ability to handle projects on my own,
                      earning trust and getting opportunities for solo work.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Independently Developed UIs</h4>
                  <ul>
                    <li>
                      <strong>Dafinchi.ai:</strong> Developed the entire UI for
                      an AI-powered application that extracts valuable insights
                      on statements, revenue, and risk from financial documents.
                      Utilized Next.js page router and Clerk for authentication.{" "}
                      <Link href="https://dafinchi.ai">Visit Dafinchi.ai</Link>
                    </li>
                    <li>
                      <strong>Engineering Consultancy Website:</strong>{" "}
                      Developed the entire UI for engineering firm with basic
                      company details, services & portfolios, project tracking
                      and milestones, and hiring employee. Created the complete
                      UI using Next.js app router, integrated Leaflet for map
                      features, and employed Recharts for data visualization.
                      The website is soon to be deployed for public.
                    </li>
                    <li>
                      <strong>Adventure Website Dashboard:</strong>Developed an
                      adventure website dashboard. Utilized React, Quill text
                      editor, and more.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-card-container">
            <div className="experience-card">
              <h3 className="experience-card-designation">
                Software Engineering Intern
              </h3>
              <h4 className="experience-card-company">Leapfrog Technology</h4>
              <div className="experience-card-date-location">
                <div className="experience-card-date">
                  <MdOutlineDateRange />
                  11/2023 - 01/2024
                </div>
                <div className="experience-card-location">
                  <FaLocationDot />
                  Charkhal Rd, Kathmandu
                </div>
              </div>
              <Link
                className="experience-card-link"
                href={"https://github.com/aayushman108"}
              >
                <FaLink />
                https://github.com/aayushman108
              </Link>
              <ul className="experience-card-list">
                <li>
                  Gained valuable experience in frontend (HTML, HTML5 Canvas,
                  CSS, Sass, JavaScript, TypeScript), backend (Node.js,
                  Express), and database (PostgreSQL) technologies. This gave me
                  an overall perspective of web development.
                </li>
                <li>
                  Completed assignment projects such as Super Mario Game, Todo
                  App, E-Commerce App, and more to enhance skills
                  <Link
                    className="experience-card-link"
                    href="https://aayushman108.github.io/Projects-Table"
                  >
                    https://aayushman108.github.io/Projects-Table
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
