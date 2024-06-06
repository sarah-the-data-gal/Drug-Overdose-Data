new Chart("myChart", {
  type: "bar",
  data: {
    labels: stateData.map(object => object.stateID),
    datasets: [{
      label: "Drug Overdoses",
      backgroundColor: "red",
      data: stateData.map(object => object.d2015),
    },
    {
      label: "Crime Rate",
         backgroundColor: "blue",
         data: stateData.map(object => object.c2015),
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: "Drug Deaths and Crime in the US"
    }
  }
});
var select = document.getElementById("selectNumber");
var options = ["2015", "2016", "2017", "2018", "2019"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
console.log(el.value)