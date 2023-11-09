import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex flex-row justify-evenly w-full items-center">
        <li>
          <Link href={"/sections"}>Sections</Link>
        </li>
        <li>
          <Link href={"/media"}>Media</Link>
        </li>
      </ul>
    </nav>
  );
}
