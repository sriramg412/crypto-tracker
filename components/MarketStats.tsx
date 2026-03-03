import { getGlobalStats } from "@/services/api";
import { BarChart3, Activity, Bitcoin } from "lucide-react";

export default async function MarketStats() {
  const stats = await getGlobalStats();

  
  if (!stats) {
    return (
      <div className="mb-6 text-gray-500 dark:text-gray-400">
        Market data unavailable
      </div>
    );
  }

  
  const marketCap = stats?.total_market_cap?.inr ?? 0;
  const volume = stats?.total_volume?.inr ?? 0;
  const btcDominance = stats?.market_cap_percentage?.btc ?? 0;

  
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

    
      <StatCard
        title="Market Cap"
        value={`₹${formatCurrency(marketCap)}`}
        icon={<BarChart3 className="w-5 h-5 text-green-500" />}
      />

      
      <StatCard
        title="24h Volume"
        value={`₹${formatCurrency(volume)}`}
        icon={<Activity className="w-5 h-5 text-blue-500" />}
      />

      
      <StatCard
        title="BTC Dominance"
        value={`${btcDominance.toFixed(2)}%`}
        icon={<Bitcoin className="w-5 h-5 text-yellow-500" />}
      />

    </div>
  );
}




function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="
      p-5 rounded-2xl
      bg-white dark:bg-gray-900
      shadow-sm hover:shadow-md
      border border-gray-200 dark:border-gray-700
      transition-all duration-300
    "
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {title}
        </p>

    
        <div className="opacity-80">{icon}</div>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight">
        {value}
      </h2>
    </div>
  );
}