<!-- src/components/OrderFunnelChart.vue -->
<template>
  <div class="chart-container">
    <canvas id="funnelChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { FunnelController, TrapezoidElement } from 'chartjs-chart-funnel';

Chart.register(...registerables, FunnelController, TrapezoidElement);

const funnelChartConfig = {
  type: 'funnel',
  data: {
    labels: ['Total Orders', 'Processing', 'Shipped', 'Delivered'],
    datasets: [
      {
        label: 'Order Funnel',
        data: [1000, 750, 500, 300],
        backgroundColor: ['#007bff', '#17a2b8', '#28a745', '#ffc107'],
        borderColor: '#fff',
        borderWidth: 1,
      }
    ]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += `${context.raw} orders`;
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Number of Orders'
        },
        beginAtZero: true
      },
      y: {
        title: {
          display: true,
          text: 'Order Stages'
        },
        beginAtZero: true
      }
    }
  }
};

onMounted(() => {
  new Chart(document.getElementById('funnelChart').getContext('2d'), funnelChartConfig);
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
