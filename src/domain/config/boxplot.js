// src/domain/config/boxPlotData.js

export const boxPlotConfig = {
    type: 'boxplot',
    data: {
      labels: ['Category 1', 'Category 2', 'Category 3'], 
      datasets: [
        {
          label: 'Service Min Distribution',
          data: [
            [2, 3, 5, 6, 8],   // [min, Q1, median, Q3, max]
            [1, 4, 6, 8, 10],
            [3, 5, 7, 9, 11]
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += `Min: ${context.raw[0]}, Q1: ${context.raw[1]}, Median: ${context.raw[2]}, Q3: ${context.raw[3]}, Max: ${context.raw[4]}`;
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Service Min'
          },
          beginAtZero: true
        },
        x: {
          title: {
            display: true,
            text: 'Categories'
          }
        }
      }
    }
  };
  