"use client";

import { useState } from "react";

interface Props {
  onSelect: (category: string) => void;
}

export default function CategoryBar({ onSelect }: Props) {
  const tabs = ["All", "Highlights", "AI", "Gaming", "DeFi"];
  const [active, setActive] = useState("All");

  const handleClick = (tab: string) => {
    setActive(tab);
    onSelect(tab);
  };

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-3 min-w-max">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => handleClick(t)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition shrink-0 ${
              active === t
                ? "bg-green-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 dark:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}