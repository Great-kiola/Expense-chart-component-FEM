// console.log("Hello world!");
let ctx = document.getElementById("myChart");

async function fetchData() {
  const url = "./assets/data.json";
  const response = await fetch(url);

  const dataPoints = await response.json();

  // console.log(dataPoints);
  return dataPoints;
  
}

fetchData().then((dataPoints) => {

  // console.log(dataPoints[6].amount);


  const month = dataPoints.map(function (index) {
    return index.day;
  });

  const amount = dataPoints.map(function (index) {
    return index.amount;
  });


  Chart.defaults.font.family = "DM sans";
  Chart.defaults.font.size = 12;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: month,

      datasets: [
        {
          data: amount,
          tension: 0.3,
          borderRadius: 5,
          backgroundColor: "hsl(10, 79%, 65%)",
          cursor: "pointer",
          hoverBackgroundColor: "hsl(186, 34%, 60%)",
        },
      ],
    },

    options: {
      plugins: {
        legend: {
          display: false,
          padding: {
            right: 10,
            left: 200,
          },
        },
      },

      scales: {
        y: {
          beginAtZero: true,

          ticks: {
            display: false,
          },

          grid: {
            display: false,
            drawTicks: false,
          },
        },

        x: {
          grid: {
            display: false,
            drawTicks: false,
          },
        },
      },
    },
  });
});

// fetchData();
