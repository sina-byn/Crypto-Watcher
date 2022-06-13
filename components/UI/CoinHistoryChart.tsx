import { FC, useEffect, useState } from "react";

// Importing Chart.js
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

// Importing Interfaces
import { CoinHistoryData, TableData } from "../../interfaces/interfaces";

interface Props {
  coinData: CoinHistoryData;
  timeFormat: string;
}

const CoinHistoryChart: FC<Props> = ({ coinData, timeFormat }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale
  );

  const { day, week, month, year, details } = coinData;

  const [chartData, setChartData] = useState<TableData[]>();

  useEffect(() => {
    const determineTimeFormat = () => {
      switch (timeFormat) {
        case "24h":
          setChartData(day);
          break;
        case "7d":
          setChartData(week);
          break;
        case "30d":
          setChartData(month);
          break;
        case "1y":
          setChartData(year);
          break;
        default:
          setChartData(day);
          break;
      }
    };

    determineTimeFormat();
  }, [day, week, month, year, timeFormat]);

  return (
    <div className='chart container mx-auto'>
      <Line
        className='w-full px-6 xs:px-0'
        data={{
          datasets: [
            {
              label: `${details.name} Price`,
              data: chartData,
              borderWidth: 1,
              borderColor: "#ffffff",
              tension: 0.4,
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 0,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          color: "red",
          scales: {
            xAxis: {
              title: {
                display: true,
                text: "time",
                color: "#0c9361",
                align: "start",
              },
              axis: "x",
              grid: {
                display: false,
              },
              type: "time",
            },
            yAxis: {
              title: {
                display: true,
                text: "price",
                color: "#0c9361",
              },
              axis: "y",
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CoinHistoryChart;
