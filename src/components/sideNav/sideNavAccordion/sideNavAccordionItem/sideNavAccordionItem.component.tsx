"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

interface Props {
  navLink: {
    id: string;
    label: string;
    link: string;
    icon: React.ReactNode;
    submenu?: Array<{ id: string; label: string; link: string }>;
  };
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}
export function SideNavAccordionItem({ navLink, setShowSideNav }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      contentRef.current && setContentHeight(contentRef.current?.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [show]);

  const handleToggle = () => {
    setShow(!show);
  };
  const toggleStyle = () => {
    return { maxHeight: `${contentHeight}px` };
  };

  return (
    <>
      {navLink?.submenu?.length ? (
        <div className="accordion-item">
          <div className="accordion-item-btn" onClick={handleToggle}>
            <Link href="" className="dropdown-title">
              {navLink.icon}
              {navLink.label}
            </Link>
            <IoChevronDownSharp
              className={"dropdown-icon" + (show ? " show" : "")}
            />
          </div>
          <div
            ref={contentRef}
            className="accordion-item-content"
            style={toggleStyle()}
          >
            <ul className="content-list">
              {navLink?.submenu?.map((item, index) => (
                <li key={index}>
                  <Link
                    className="content-list-link"
                    href={item.link}
                    onClick={() => setShowSideNav(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="accordion-item">
          <Link
            className="accordion-item-link"
            href={navLink.link}
            onClick={() => setShowSideNav(false)}
          >
            {navLink.icon}
            {navLink.label}
          </Link>
        </div>
      )}
    </>
  );
}
