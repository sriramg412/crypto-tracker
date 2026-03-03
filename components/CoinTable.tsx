"use client";

import SparklineChart from "./SparklineChart";
import { Coin } from "@/types/coin";

export default function CoinTable({ coins }: { coins: Coin[] }) {
  return (
    <>
      {/* 🔹 MOBILE CARD VIEW */}
      <div className="md:hidden space-y-4">
        {coins?.map((coin, index) => (
          <div
            key={coin.id}
            className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={coin.image} width={28} alt={coin.name} />
                <div>
                  <div className="font-semibold">{coin.name}</div>
                  <div className="text-xs text-gray-500 uppercase">
                    {coin.symbol}
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                #{index + 1}
              </div>
            </div>

            <div className="mt-3 flex justify-between text-sm">
              <span>Price</span>
              <span className="font-medium">
                ${coin.current_price.toLocaleString()}
              </span>
            </div>

            <div className="mt-1 flex justify-between text-sm">
              <span>24h</span>
              <span
                className={
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
              </span>
            </div>

            <div className="mt-3 h-12">
              <SparklineChart
                data={coin.sparkline_in_7d?.price ?? []}
                positive={coin.price_change_percentage_24h > 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 DESKTOP TABLE VIEW */}
      <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Coin</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">24h</th>
              <th className="p-3 text-left">Market Cap</th>
              <th className="p-3 text-left">7D</th>
            </tr>
          </thead>

          <tbody>
            {coins?.map((coin, index) => (
              <tr
                key={coin.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="p-3 text-gray-500">{index + 1}</td>

                <td className="p-3 flex items-center gap-3">
                  <img src={coin.image} width={28} alt={coin.name} />
                  <div>
                    <div className="font-semibold">{coin.name}</div>
                    <div className="text-xs text-gray-500 uppercase">
                      {coin.symbol}
                    </div>
                  </div>
                </td>

                <td className="p-3 font-medium">
                  ${coin.current_price.toLocaleString()}
                </td>

                <td
                  className={`p-3 font-semibold ${
                    coin.price_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
                </td>

                <td className="p-3">
                  ${coin.market_cap?.toLocaleString()}
                </td>

                <td className="p-3 w-32">
                  <SparklineChart
                    data={coin.sparkline_in_7d?.price ?? []}
                    positive={coin.price_change_percentage_24h > 0}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}