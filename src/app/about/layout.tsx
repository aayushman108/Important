import { AboutNav } from "@/components";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AboutNav />
      {children}
    </div>
  );
}
