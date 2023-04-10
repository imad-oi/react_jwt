import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend);

const BarChart = () => {
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const labels = [
    "September",
    "August",
    "July",
    "June",
    "May",
    "April",
    "March",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Interne",
        data: [65, 59, 80, 81, 56, 55, 80],
        backgroundColor: [getRandomColor()],
        borderColor: [getRandomColor()],
        borderWidth: 1,
        barThichness: 20,
      },
      {
        label: "Externe",
        data: [20, 40, 40, 31, 16, 65, 55],
        backgroundColor: ["rgb(0, 255, 0)"],
        borderColor: ["rgb(0, 255, 0)"],
        borderWidth: 1,
        barThichness: 20,
      },
    ],
  };

  return (
    <div className="barChart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
