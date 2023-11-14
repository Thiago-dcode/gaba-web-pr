import React from "react";
import { getSections } from "@/app/lib/data";

export default async function Sections() {
  const sections = await getSections();
  console.log(sections);

  return (
    <div>
      {sections?.map((section) => {
        return (
          <div className="border border-white">
            <p>{section.name}</p>
          </div>
        );
      })}
    </div>
  );
}
