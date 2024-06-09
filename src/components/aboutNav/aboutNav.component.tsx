"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export function AboutNav() {
  const segment = useSelectedLayoutSegment();
  console.log(segment, "segment");
  return (
    <div>
      <Link href="/about" className={`${segment === null ? "active" : ""}`}>
        About
      </Link>
      <Link
        href="/about/about1"
        className={`${segment === "about1" ? "active" : ""}`}
      >
        About 1
      </Link>
      <Link
        href="/about/about2"
        className={`${segment === "about2" ? "active" : ""}`}
      >
        About 2
      </Link>
      <Link
        href="/about/about3"
        className={`${segment === "about3" ? "active" : ""}`}
      >
        About 3
      </Link>
    </div>
  );
}
