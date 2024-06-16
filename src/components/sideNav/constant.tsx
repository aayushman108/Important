import { FaHome } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";

export const sideNavItems: Array<{
  id: string;
  label: string;
  link: string;
  icon: React.ReactNode;
  submenu?: Array<{ id: string; label: string; link: string }>;
}> = [
  {
    id: "Home",
    label: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    id: "About Us",
    label: "About Us",
    link: "/about",
    icon: <BiSolidDetail />,
  },
  {
    id: "Our Projects",
    label: "Our Projects",
    link: "/projects",
    icon: <FaProjectDiagram />,
  },
  {
    id: "Company",
    label: "Company",
    link: "/company",
    icon: <RiTeamFill />,
    submenu: [
      {
        id: "Team",
        label: "Team",
        link: "/company",
      },
      {
        id: "Client",
        label: "Client",
        link: "/company/client",
      },
      {
        id: "Partner",
        label: "Partner",
        link: "/company/partner",
      },
    ],
  },
  {
    id: "Contact Us",
    label: "Contact Us",
    link: "/contact",
    icon: <FaPhone />,
  },
];
