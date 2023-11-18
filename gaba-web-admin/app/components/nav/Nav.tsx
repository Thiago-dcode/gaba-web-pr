'use client'

import React from "react";
import Link from "next/link";
import LogOut from "../auth/LogOut";
import { usePathname } from "next/navigation";
const links = [
  {
    link: '/sections',
    name: 'Sections'
  },
  {
    link: '/media',
    name: 'Media'
  },

];
export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between w-full ">

      <ul className="flex  justify-evenly gap-12 flex-row  w-full  ">
        <div className="flex  w-full pl-4">
          {links.map(link => {
            return (
              <li className={` px-4 ${pathname === link.link? 'bg-white text-black':''}  text-center w-28 flex items-center justify-center hover:bg-white hover:text-black`}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            )
          })}
        </div>
        <li className="self-end justify-self-end pr-4 ">
          <LogOut />
        </li>
      </ul>




    </nav>
  );
}
