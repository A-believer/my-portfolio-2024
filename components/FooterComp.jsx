"use client";

import { useEffect, useState } from "react";

export default function FooterComp() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-10 flex flex-col items-center justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-6 md:text-xl text-base md:py-8 py-5">
        <li className="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-300">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-300">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-300">
          <a href="#project">Projects</a>
        </li>
        <li className="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-300">
          <a href="#tools">Tools</a>
        </li>
        <li className="hover:text-textII hover:underline underline-offset-[16px] transition-all duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="text-textII text-center text-sm md:text-base">
        Copyright © {year} <span className="font-semibold text-textI">David Abolade</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
