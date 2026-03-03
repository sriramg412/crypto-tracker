"use client";

import { useState } from "react";
import CategoryBar from "./CategoryBar";
import CoinTable from "./CoinTable";
import { Coin } from "@/types/coin";

interface Props {
  coins: Coin[];
}

export default function FilteredDashboard({ coins }: Props) {
  const [category, setCategory] = useState("All");

  const filteredCoins =
    category === "All"
      ? coins
      : coins.filter((coin) =>
          coin.name.toLowerCase().includes(category.toLowerCase())
        );

  return (
    <section className="w-full">
      
      {/* Category Section */}
      <div className="mb-4">
        <CategoryBar onSelect={setCategory} />
      </div>

      {/* Table Section */}
      <div className="w-full">
        <CoinTable coins={filteredCoins} />
      </div>

    </section>
  );
}