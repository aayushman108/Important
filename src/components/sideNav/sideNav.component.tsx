"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { SideNavAccordion } from "./sideNavAccordion";
import { sideNavItems } from "./constant";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export function SideNav(props: Props) {
  const handleSideNavActive = () => {
    props.setShow(false);
  };
  return (
    <div className={`side-nav-container ${props.show ? "active" : ""}`}>
      <div className="side-nav">
        <span className="side-nav-close">
          <RxCross1 onClick={handleSideNavActive} />
        </span>
        <SideNavAccordion
          navLinks={sideNavItems}
          showSideNav={props.show}
          setShowSideNav={props.setShow}
        />
      </div>
    </div>
  );
}
