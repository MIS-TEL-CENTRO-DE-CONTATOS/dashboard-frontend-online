import React from "react";
import { Line as LineChart, Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ChartData,
  Point,
  BubbleDataPoint,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  titleChartProps: string | null;
  wprops: number;
  hprops: number;
  data: ChartData<
    "line",
    (
      | number
      | [number, number]
      | Point
      | BubbleDataPoint
      | null
    )[],
    unknown
  >;
}

export default function LineGraph({
  titleChartProps,
  wprops,
  hprops,
  data,
}: ChartProps) {
  return (
    <div>
      <h2>{titleChartProps}</h2>
      <LineChart
        data={data}
        width={wprops}
        height={hprops}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
