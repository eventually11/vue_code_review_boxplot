<template>
  <div class="order-tendency-chart">
    <div class="chart-header">Order Tendency</div>
    <canvas id="orderTendencyChart"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default {
  name: 'OrderTendencyChart',
  setup() {
    onMounted(() => {
      const ctx = document.getElementById('orderTendencyChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {}, // Replace this with actual data in parent component or API
        options: {
          responsive: true,
          scales: {
            x: { title: { display: true, text: 'Time' } },
            y: { title: { display: true, text: 'Order Tendency' } }
          }
        }
      });
    });
  }
};
</script>

<style scoped>
.order-tendency-chart {
  width: 100%;
  height: 400px;
}
.chart-header {
  background-color: #426871;
  color: white;
  text-align: center;
  line-height: 30px;
  height: 30px;
  font-weight: 400;
}
</style>
