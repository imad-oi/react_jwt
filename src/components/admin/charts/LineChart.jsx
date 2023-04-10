import {
  Chart,
  LineElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(PointElement);
Chart.register(LineElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Avancement Externe",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.9)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
      {
        label: "Avancement Interne",
        data: [10, 30, 54, 50, 56, 60, 80],
        fill: false,
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 2, 
      },
      {
        label: "Avancement à l'etranger",
        data: [15, 28, 30, 26, 34, 43, 30],
        fill: false,
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 2, 
      },
    ],
  };

  const options = {
    scales: {
      x: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      y: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    height : 300
  };

  return (
    <>
      <div>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default LineChart;
