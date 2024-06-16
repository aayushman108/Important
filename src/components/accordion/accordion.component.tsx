import React from "react";
import { AccordionItem } from "./accordionItem";

interface IAccordionProps {
  content: {
    id: number | string;
    title: string;
    content: Array<string>;
  }[];
}
export function Accordion({ content: accordionContent }: IAccordionProps) {
  return (
    <div className="accordion">
      <div className="accordion__main">
        {accordionContent.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
