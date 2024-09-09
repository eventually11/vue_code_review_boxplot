<!-- src/components/BoxPlot.vue -->
<template>
  <div class="chart-container">
    <canvas id="boxPlotChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { BoxPlotController, BoxAndWiskers } from '@sgratzl/chartjs-chart-boxplot';


Chart.register(...registerables, BoxPlotController, BoxAndWiskers);


const boxPlotConfig = {
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

onMounted(() => {
  new Chart(document.getElementById('boxPlotChart').getContext('2d'), boxPlotConfig);
});
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding: 20px;
}
</style>
