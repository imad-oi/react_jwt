import { Paper } from "@mui/material";
import BarChart from "../../components/admin/charts/BarChart";
import Doughunt from "../../components/admin/charts/Doughunt";
import LineChart from "../../components/admin/charts/LineChart";
import RadarChart from "../../components/admin/charts/RadarChart";
import "../../styles/statics.css";

const Statistics = () => {
  return (
    // <div className="statics">
    <div className="container  statics">
      <Paper>
        <div className="row pt-2 ps-3">
          <p>Statistics of the year</p>
        </div>
      </Paper>

      <div className="row pt-3 w-100">
        <div className="col-8 d-flex flex-column justify-content-center">
          <p>Barre chart</p>
          <Paper elevation={6}>
            <BarChart />
          </Paper>
        </div>
        <div className="col-4 bg-">
          <p>Doughnut chart</p>
          <Paper elevation={6}>
            <Doughunt />
          </Paper>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-4">
          <p>Radar chart</p>
          <Paper elevation={6}>
            <RadarChart />
          </Paper>
        </div>
        <div className="col-8 mb-2">
          <p>Line chart</p>
          <Paper elevation={6}>
            <LineChart />
          </Paper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Statistics;
