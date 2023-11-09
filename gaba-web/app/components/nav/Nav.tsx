"use client";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";

export default function Nav({ sections }: { sections: Section[] }) {
  const pathname = usePathname();

  return (
    <nav>
      {sections && (
        <ul>
          {sections.map((section, i) => {
            return (
              <li key={`section-li-${i}`}>
                <Link href={section.link}>
                  <Image
                    height={50}
                    width={50}
                    alt={`${section.name} icon`}
                    src={
                      pathname === section.link
                        ? section.iconActive
                        : section.iconUnActive
                    }
                  ></Image>
                  <span>{section.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
