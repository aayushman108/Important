import React, { SetStateAction } from "react";
import { SideNavAccordionItem } from "./sideNavAccordionItem";

interface Props {
  navLinks: {
    id: string;
    label: string;
    link: string;
    icon: React.ReactNode;
    subMenu?: Array<{ id: string; label: string; link: string }>;
  }[];
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<SetStateAction<boolean>>;
}
export function SideNavAccordion({
  navLinks,
  showSideNav,
  setShowSideNav,
}: Props) {
  return (
    <div className="accordion">
      <div className="accordion__main">
        {navLinks.map((item) => (
          <SideNavAccordionItem
            key={item.id}
            navLink={item}
            showSideNav={showSideNav}
            setShowSideNav={setShowSideNav}
          />
        ))}
      </div>
    </div>
  );
}
