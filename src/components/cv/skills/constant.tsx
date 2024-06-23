import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaNode, FaReact, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

export const SKILLS = [
  { id: 1, skill: "HTML", icon: <TiHtml5 size={25} /> },
  { id: 2, skill: "CSS & SASS", icon: <FaSass size={25} /> },
  { id: 3, skill: "Javascript", icon: <SiJavascript size={25} /> },
  { id: 4, skill: "Typescript", icon: <SiTypescript size={25} /> },
  { id: 5, skill: "React", icon: <FaReact size={25} /> },
  { id: 6, skill: "Next", icon: <SiNextdotjs size={25} /> },
  { id: 10, skill: "Redux-toolkit", icon: <SiRedux size={25} /> },
  { id: 11, skill: "Git & Github & GitLab", icon: <FaGitAlt size={25} /> },
  { id: 7, skill: "Node", icon: <FaNode size={25} /> },
  { id: 8, skill: "Express", icon: <SiExpress size={25} /> },
  { id: 9, skill: "Postgresql", icon: <BiLogoPostgresql size={25} /> },
];
