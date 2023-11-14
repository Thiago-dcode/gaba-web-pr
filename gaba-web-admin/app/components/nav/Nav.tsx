import React from "react";
import Link from "next/link";
import LogOut from "../auth/LogOut";
export default function Nav() {
  return (
    <nav className="flex items-center justify-center w-full">
      <ul className="flex items-start flex-row justify-evenly w-full">
        <li>
          <Link href={"/sections"}>Sections</Link>
        </li>
        <li>
          <Link href={"/media"}>Media</Link>
        </li>
       
      </ul>
      <LogOut />
    </nav>
  );
}
