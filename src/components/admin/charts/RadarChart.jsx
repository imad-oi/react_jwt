import { Chart , LineElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    RadialLinearScale
     } from "chart.js";
import { Radar } from "react-chartjs-2";

Chart.register(RadialLinearScale)
Chart.register(LineElement, LinearScale, CategoryScale, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels :[
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ] , 
    datasets: [
      {
        label: "Interne",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.9)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Externe",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.9)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return <div>
    <Radar 
     data={data}
    />
  </div>;
};

export default RadarChart;
