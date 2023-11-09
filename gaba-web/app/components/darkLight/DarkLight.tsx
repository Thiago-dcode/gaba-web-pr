"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "../icon/Icon";
export default function DarkLight() {
  const [mode, setMode] = useState<String>("");

  const handleTheme = () => {
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("theme", "light");
      return;
    }
    setMode("dark");
    localStorage.setItem("theme", "dark");
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      setMode(theme);
      return;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setMode("dark");
      localStorage.setItem("theme", "dark");
      return;
    }

    setMode("light");
    localStorage.setItem("theme", "light");
  }, []);

  useEffect(() => {
    if (!mode) return;

    const html = document.getElementById("app");
    if (mode === "dark") {
      html?.classList.add("dark");
      return;
    }
    html?.classList.remove("dark");
  }, [mode]);

  return (
    <>
      {mode && (
        <div className="absolute right-2 top-2">
          <button
            onClick={() => {
              handleTheme();
            }}
          >
            <Icon
              propsIcon={{ size: 20 }}
              nameIcon={mode === "dark" ? "MdOutlineDarkMode" : "BsFillSunFill"}
            />
          </button>
        </div>
      )}
    </>
  );
}
