import { ArcElement, Chart, DoughnutController, LinearScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(LinearScale, DoughnutController, ArcElement);

const Doughunt = () => {
  const data = {
    labels: ["Marrakech", "Agadir", "Casablanca"],
    datasets: [
      {
        label: "Repartition",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default Doughunt;
