// console.log("Hello world!");

const ctx = document.getElementById("myChart");

// let Chart;

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 11, 5, 2, 13],
        tension: 0.3,
        // borderColor: '#00ba34',
        // borderWidth: 3,
        // radius: 3,
        // hitRadius: 10,
        // hoverRadius: 10,
        // backgroundColor: '#000'
      },

      {
        label: "# of visitors",
        data: [10, 11, 2, 3, 5, 7],
        tension: 0.3,
      }
    ],
  },


  options: {
    plugins: {
        legend: {
            display: true,
            padding: {
                right: 10,
                left: 200
            }
        }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
