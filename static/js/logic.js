function onload() {
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
}
onload();
// Function called by DOM changes
function getData() {
  let Year = document.getElementById('selDataset').value
  
  // If/Else statement to assign the chosen country to the new dataset
  if (Year == "2015") {
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
  }
  else if (Year == "2016") {
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: stateData.map(object => object.stateID),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: "red",
          data: stateData.map(object => object.d2016),
        },
        {
          label: "Crime Rate",
            backgroundColor: "blue",
            data: stateData.map(object => object.c2016),
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
  }
  else if (Year == "2017") {
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: stateData.map(object => object.stateID),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: "red",
          data: stateData.map(object => object.d2017),
        },
        {
          label: "Crime Rate",
            backgroundColor: "blue",
            data: stateData.map(object => object.c2017),
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
  }
  else if (Year == "2018") {
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: stateData.map(object => object.stateID),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: "red",
          data: stateData.map(object => object.d2018),
        },
        {
          label: "Crime Rate",
            backgroundColor: "blue",
            data: stateData.map(object => object.c2018),
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
  }
  else if (Year == "2019") {
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: stateData.map(object => object.stateID),
        datasets: [{
          label: "Drug Overdoses",
          backgroundColor: "red",
          data: stateData.map(object => object.d2019),
        },
        {
          label: "Crime Rate",
            backgroundColor: "blue",
            data: stateData.map(object => object.c2019),
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
  }
}
