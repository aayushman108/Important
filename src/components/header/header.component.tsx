"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Header() {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <div>
      <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
        Home
      </Link>
      <Link
        href="/about"
        className={`${pathname.includes("/about") ? "active" : ""}`}
      >
        About
      </Link>
      <Link
        href="/dashboard"
        className={`${pathname.includes("/dashboard") ? "active" : ""}`}
      >
        Dashboard
      </Link>
      <Link
        href="/contact"
        className={`${pathname.includes("/contact") ? "active" : ""}`}
      >
        Contact
      </Link>
    </div>
  );
}
