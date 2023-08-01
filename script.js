// console.log("Hello world!");


let ctx = document.getElementById("myChart").getContext('2d');

let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],

    datasets: [
      {
        label: "# of Votes",
        data: [12, 11, 5, 2, 13],
        tension: 0.3,
        borderColor: '#306B34',
        borderWidth: 2
      },

      {
        label: "# of visitors",
        data: [10, 11, 2, 3, 5, 7],
        tension: 0.3,
        borderColor: '#D8973C',
        borderWidth: 2
      }
    ]
  },


  options: {
    plugins: {
        legend: {
            display: false,
            padding: {
                right: 10,
                left: 200
            }
        }
    },

    scales: {
      y: {
        beginAtZero: true,
      }
    },
  },
});
