import { Accordion } from "@/components/accordion";
import { faq } from "@/components/accordion/constant";
import React from "react";

export default function About1() {
  return (
    <>
      <Accordion content={faq} />
    </>
  );
}
