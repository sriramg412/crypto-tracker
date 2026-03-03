export async function getCoins() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true",
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Coins API failed");
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
  const res = await fetch(
    "https://api.coingecko.com/api/v3/global",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.data;
  
}