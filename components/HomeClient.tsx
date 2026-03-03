"use client";

import { useState } from "react";
import CategoryBar from "./CategoryBar";
import CoinTable from "./CoinTable";
import { Coin } from "@/types/coin";

interface Props {
  coins: Coin[];
}

export default function HomeClient({ coins }: Props) {
  const [category, setCategory] = useState("All");

  const filteredCoins =
    category === "All"
      ? coins
      : coins.filter((coin) =>
          coin.name.toLowerCase().includes(category.toLowerCase())
        );

  return (
    <>
      <CategoryBar onSelect={setCategory} />
      <CoinTable coins={filteredCoins} />
    </>
  );
}