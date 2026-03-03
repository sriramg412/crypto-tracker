import { getCoins } from "@/services/api";
import MarketStats from "@/components/MarketStats";
import CategoryBar from "@/components/CategoryBar";
import CoinTable from "@/components/CoinTable";


export default async function Home() {
  const coins = await getCoins();

  return (
    <>
    
      <h1 className="text-3xl font-bold mb-4">
       Crypto Market Dashboard
      </h1>

      <MarketStats />
      <CategoryBar />
     
       <CoinTable coins={coins ?? []} />
 
    </>
  );
}
