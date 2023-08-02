// console.log("Hello world!");


let ctx = document.getElementById("myChart").getContext('2d');

let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],

    datasets: [
      {
        data: [12, 11, 5, 2, 13],
        tension: 0.3,
        borderRadius: 5,
        backgroundColor: 'hsl(10, 79%, 65%)'
      },
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
