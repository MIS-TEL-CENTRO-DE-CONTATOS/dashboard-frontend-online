import { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  ChartTypeRegistry,
  registerables,
} from "chart.js";

type ChartType = keyof ChartTypeRegistry;
interface ChartProps {
  titleChartProps: string | null;
  tipoGrafico: ChartType;
  columnColor: string;
}

export default function BarExample({
  titleChartProps,
  tipoGrafico,
  columnColor,
}: ChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const numbers: number[] = [1, 2, 3, 4, 5];
  const strings: string[] = numbers.map((num) =>
    num.toString()
  );

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy(); // Destroy previous chart instance
        }

        Chart.register(...registerables);

        const config: ChartConfiguration<
          typeof tipoGrafico,
          typeof columnColor
        > = {
          type: tipoGrafico,
          data: {
            labels: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
            ],
            datasets: [
              {
                label: "Vendas",
                data: [1200, 1500, 1000, 1800, 2000, 1600],
                backgroundColor: columnColor,
              },
              {
                label: "alo",
                data: [100, 500, 1400, 1200, 2000, 1600],
                backgroundColor: columnColor,
              },
            ],
          },
        };
        chartInstanceRef.current = new Chart(ctx, config);
      }
    }
  }, []);

  return (
    <div>
      <h2>{titleChartProps}</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
