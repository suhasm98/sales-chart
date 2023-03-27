import "./styles.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import { lineChartConfig, threeDBarChartConfig } from "./constants";
highcharts3d(Highcharts);

export default function App() {
  return (
    <div className="App">
      <h1>Assignment of Frontend Developer</h1>
      <div className="ChartContainer">
        <HighchartsReact highcharts={Highcharts} options={lineChartConfig} />
      </div>
      <div className="ChartContainer">
        <HighchartsReact
          highcharts={Highcharts}
          options={threeDBarChartConfig}
        />
      </div>
    </div>
  );
}
