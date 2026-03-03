// services/api.ts

export async function getCoins() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true",
      {
        next: { revalidate: 60 }, // revalidate every 60 seconds
      }
    );

    if (!res.ok) {
      console.error("Coins API failed:", res.status);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Coins fetch error:", error);
    return [];
  }
}

export async function getGlobalStats() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/global",
      {
        next: { revalidate: 60 }, // better than no-store for production
      }
    );

    if (!res.ok) {
      console.error("Global API failed:", res.status);
      return null;
    }

    const data = await res.json();
    return data?.data ?? null;
  } catch (error) {
    console.error("Global fetch error:", error);
    return null;
  }
}