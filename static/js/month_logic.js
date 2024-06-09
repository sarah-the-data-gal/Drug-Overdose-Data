var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "lightblue","yellowgreen","lightskyblue","lightcoral", "teal"]
function onload() {
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: monthData.map(object => object.month),
      datasets: [{
        label: "Drug Overdoses",
        backgroundColor: colors,
        data: monthData.map(object => object.m2015),
      }]
    },
    options: {
      legend: {display: true},
      title: {
        display: true,
        text: "Drug Deaths in the US by Month"
      }
    }
  });
}
onload();
// Function called by DOM changes
function getData() {
  let Year = document.getElementById('selDataset').value
  
  // If/Else statement to assign the chosen country to the new dataset
  if (Year == "2015") {
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: monthData.map(object => object.month),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: colors,
          data: monthData.map(object => object.m2015),
        }]
      },
      options: {
        legend: {display: true},
        title: {
          display: true,
          text: "Drug Deaths in the US by Month"
        }
      }
    });
  }
  else if (Year == "2016") {
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: monthData.map(object => object.month),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: colors,
          data: monthData.map(object => object.m2016),
        }]
      },
      options: {
        legend: {display: true},
        title: {
          display: true,
          text: "Drug Deaths in the US by Month"
        }
      }
    });
  }
  else if (Year == "2017") {
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: monthData.map(object => object.month),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: colors,
          data: monthData.map(object => object.m2017),
        }]
      },
      options: {
        legend: {display: true},
        title: {
          display: true,
          text: "Drug Deaths in the US by Month"
        }
      }
    });
  }
  else if (Year == "2018") {
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: monthData.map(object => object.month),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: colors,
          data: monthData.map(object => object.m2018),
        }]
      },
      options: {
        legend: {display: true},
        title: {
          display: true,
          text: "Drug Deaths in the US by Month"
        }
      }
    });
  }
  else if (Year == "2019") {
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: monthData.map(object => object.month),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: colors,
          data: monthData.map(object => object.m2019),
        }]
      },
      options: {
        legend: {display: true},
        title: {
          display: true,
          text: "Drug Deaths in the US by Month"
        }
      }
    });
  }
}
