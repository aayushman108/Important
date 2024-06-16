"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

import "../../../styles/About1.scss";

interface IAccordionItemProps {
  item: {
    id: number | string;
    title: string;
    content: Array<string>;
  };
}
export function AccordionItem({ item: accordionItem }: IAccordionItemProps) {
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

  return (
    <div className="accordion-item">
      <div className="accordion-item__heading">
        <button className="accordion-item__heading__btn" onClick={handleToggle}>
          <h5 className="dropdown-title">{accordionItem.title}</h5>
          <IoChevronDownSharp
            className={"dropdown-icon" + (show ? " show" : "")}
          />
        </button>
      </div>
      <div
        ref={contentRef}
        className="accordion-item__content"
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <ul className="content-list">
          {accordionItem.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
