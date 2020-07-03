import * as d3 from "d3";
import { constructChart } from "./utility/constructChart";
import "./stackbar-style.scss";

export const createStackbar = (selector) => {
  const data = { topVal: -35, bottomVal: -25 };
  const mainContainer = d3
    .select(selector)
    .append("svg")
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("viewBox", "0 0 916.45 291");

  constructChart(mainContainer, data);
};
