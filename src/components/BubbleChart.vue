<template>
  <div class="bubble-chart">
    <div class="chart-header">Order price & time</div>
    <canvas id="bubbleChart"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { Chart, BubbleController, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(BubbleController, LinearScale, PointElement, Tooltip, Legend);

export default {
  name: 'BubbleChart',
  setup() {
    onMounted(() => {
      const ctx = document.getElementById('bubbleChart').getContext('2d');
      new Chart(ctx, {
        type: 'bubble',
        data: {}, // Replace this with actual data in parent component or API
        options: {
          responsive: true,
          scales: {
            x: { title: { display: true, text: 'Time' } },
            y: { title: { display: true, text: 'Price' } }
          }
        }
      });
    });
  }
};
</script>

<style scoped>
.bubble-chart {
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
