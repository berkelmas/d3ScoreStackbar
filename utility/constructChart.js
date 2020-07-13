import * as d3 from "d3";
const scaleData = d3.scaleLinear().domain([-100, 0, 100]).range([0, 458, 916]);

export const constructChart = (svgContainer, data) => {
  const titlesContainer = svgContainer.append("g").attr("id", "titles");
  titlesContainer
    .append("text")
    .classed("stackbar-cls-1", true)
    .attr("transform", "translate(0 33.76)")
    .text("Vergleich zum Flottendurchschitt");
  titlesContainer
    .append("text")
    .classed("stackbar-cls-1", true)
    .attr("transform", "translate(0 209.76)")
    .text("Vergleich zur Fahrzeugkategorie");

  const topBoxContainer = svgContainer.append("g").attr("id", "top-box");
  topBoxContainer
    .append("rect")
    .attr("x", "795")
    .attr("width", 121)
    .attr("height", 45)
    .classed("stackbar-cls-13", true);
  topBoxContainer
    .append("text")
    .data([data.topVal])
    .attr("transform", "translate(816.51 33.55)")
    .classed("stackbar-cls-12", true)
    .text(function (d, i) {
      return `${d >= 0 ? `+${d}` : `${d}`}%`;
    });

  const topBarContainer = svgContainer.append("g").attr("id", "top-bar");
  topBarContainer
    .append("rect")
    .classed("stackbar-cls-9", true)
    .attr("x", 0.45)
    .attr("y", 79)
    .attr("width", 916)
    .attr("height", 45);
  topBarContainer
    .append("rect")
    .classed("stackbar-cls-10", true)
    .attr("x", 456)
    .attr("y", 79)
    .attr("width", 2)
    .attr("height", 45);
  topBarContainer
    .append("rect")
    .data([data["topVal"]])
    .classed("stackbar-cls-13", true)
    .attr("height", 45)
    .attr("x", 458)
    .attr("y", 79)
    .attr("width", 0)
    .transition()
    .duration(1000)
    .attr("x", function (d, i) {
      if (d < 0) {
        return scaleData(d);
      }
      if (d >= 0) {
        return scaleData(d) - (scaleData(d) - 458);
      }
    })
    .attr("width", function (d, i) {
      const dataStart = scaleData(d);
      if (d < 0) {
        return 458 - dataStart - 2;
      }
      if (d >= 0) {
        return dataStart - 458;
      }
    });

  const bottomBoxContainer = svgContainer.append("g").attr("id", "bottom-box");
  bottomBoxContainer
    .append("rect")
    .classed("stackbar-cls-11", true)
    .attr("x", 794)
    .attr("y", 176)
    .attr("width", 121)
    .attr("height", 45);
  bottomBoxContainer
    .append("text")
    .data([data["bottomVal"]])
    .classed("stackbar-cls-12", true)
    .attr("transform", "translate(816.51 209.55)")
    .text(function (d, i) {
      return `${d >= 0 ? `+${d}` : `${d}`}%`;
    });

  const bottomBarContainer = svgContainer.append("g").attr("id", "bottom-bar");
  bottomBarContainer
    .append("rect")
    .classed("stackbar-cls-9", true)
    .attr("x", 0.45)
    .attr("y", 246)
    .attr("width", 916)
    .attr("height", 45);
  bottomBarContainer
    .append("rect")
    .classed("stackbar-cls-10", true)
    .attr("x", 456)
    .attr("y", 246)
    .attr("width", 2)
    .attr("height", 45);
  bottomBarContainer
    .append("rect")
    .data([data["bottomVal"]])
    .classed("stackbar-cls-11", true)
    .attr("y", 246)
    .attr("width", 0)
    .attr("x", 458)
    .attr("height", 45)
    .transition()
    .duration(1000)
    .attr("x", function (d, i) {
      if (d < 0) {
        return scaleData(d);
      }
      if (d >= 0) {
        return scaleData(d) - (scaleData(d) - 458);
      }
    })
    .attr("width", function (d, i) {
      const dataStart = scaleData(d);
      if (d < 0) {
        return 458 - dataStart - 2;
      }
      if (d >= 0) {
        return dataStart - 458;
      }
    });
};
