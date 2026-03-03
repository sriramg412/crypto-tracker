export default function CategoryBar() {
  const tabs = ["All", "Highlights", "AI", "Gaming", "DeFi"];

  return (
    <div className="flex gap-3 overflow-x-auto mb-4">
      {tabs.map((t) => (
        <button  key={t}  className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800">
          {t}
        </button>
      ))}
    </div>
  );
}