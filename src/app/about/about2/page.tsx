"use client";
import React, { useState } from "react";
import "../../../styles/about2.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideNav } from "@/components/sideNav";

export default function About2() {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);
  const handleHamburgerClick = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <div>
      <SideNav show={showSideNav} setShow={setShowSideNav} />
      <GiHamburgerMenu onClick={handleHamburgerClick} />
    </div>
  );
}
