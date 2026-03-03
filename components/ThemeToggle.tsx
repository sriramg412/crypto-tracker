"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    const isDark =
      document.documentElement.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <button onClick={toggle} className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700">
      {dark ? "☀️" : "🌙"}
    </button>
  );
}