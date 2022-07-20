var yValues = [25, 55, 20];
var barColors = ["blueviolet", "#e699ff", "lavender"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
});
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  var data = google.visualization.arrayToDataTable([
    ["Price", "Size"],
    [50, 7],
    [60, 8],
    [70, 8],
    [80, 9],
    [90, 9],
    [100, 9],
    [110, 10],
    [120, 11],
    [130, 14],
    [140, 14],
    [150, 15],
  ]);
  // Set Options
  var options = {
    // title: "House Prices vs. Size",
    // hAxis: { title: "Square Meters" },
    // vAxis: { title: "Price in Millions" },
    legend: "none",
  };
  // Draw
  var chart = new google.visualization.LineChart(
    document.getElementById("Portfoliochart1")
  );
  chart.draw(data, options);

  var chart2 = new google.visualization.LineChart(
    document.getElementById("Portfoliochart2")
  );
  chart2.draw(data, options);

  var chart3 = new google.visualization.LineChart(
    document.getElementById("Portfoliochart3")
  );
  chart3.draw(data, options);
}
