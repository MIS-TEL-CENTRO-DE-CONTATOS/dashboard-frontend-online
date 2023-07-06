import React from "react";
import { Doughnut as DoughnutChart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  DoughnutController,
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
  DoughnutController,
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
    "doughnut",
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

export default function RoscaGraph({
  titleChartProps,
  wprops,
  hprops,
  data,
}: ChartProps) {
  return (
    <div>
      <h2>{titleChartProps}</h2>
      <DoughnutChart
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
