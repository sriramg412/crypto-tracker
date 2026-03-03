"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
} from "recharts";

export default function SparklineChart({
   data,
  positive,
}: {
  data: number[];
  positive: boolean;
}) {
  const chartData = data.map((price) => ({ price }));

  const color = positive ? "#16a34a" : "#ef4444";

 
  const min = Math.min(...data);
  const max = Math.max(...data);

  
  const padding = (max - min) * 0.2 || 0.5;

  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart
        data={chartData}
        margin={{ top: 2, right: 0, left: 0, bottom: 2 }}
      >
        
        <YAxis
          domain={[min - padding, max + padding]}
          hide
        />

        <Line
          type="monotone"
          dataKey="price"
          stroke={color}
          strokeWidth={1.8}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}