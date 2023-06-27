import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Chart,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface LineProps {
  options: ChartOptions;
  data: ChartData;
}

export default function lineChart({
  options,
  data,
}: LineProps) {}
