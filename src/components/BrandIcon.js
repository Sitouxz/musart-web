import React from "react";

export default function BrandIcon() {
  return (
    <a
      href="/"
      className="font-medium text-2xl dark:text-white"
      style={{ fontFamily: "Lexend" }}>
      Mus
      <span className="text-primary" style={{ fontFamily: "Kiwi Maru" }}>
        art
      </span>
      <span className="text-slate-400 dark:text-white">.</span>
    </a>
  );
}
