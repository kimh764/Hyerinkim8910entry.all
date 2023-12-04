/*
PIE CHART
================================================ */
var pieData = {
  labels: ["Soulmate", "Safery", "Leran", "Culture"],
  series: [9, 7, 6, 5],
};

var pieOptions = {
  width: "100%",
  height: "440px",
};

new Chartist.Pie(".pie-chart", pieData, pieOptions);
/*
BAR CHART
================================================ */
var barData = {
  labels: ["2020s", "2021s", "2024s"],
  series: [[10, 16, 29]],
};

var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace: 50,
    labelInterpolationFnc: function (value) {
      return value + "%";
    },
  },
  width: "100%",
  height: "400px",
};

new Chartist.Bar(".bar-chart", barData, barOptions);