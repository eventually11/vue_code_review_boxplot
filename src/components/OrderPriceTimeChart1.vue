<!-- src/components/OrderPriceTimeChart.vue -->
<template>
  <div class="chart-container">
    <canvas id="bubbleChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Chart } from 'chart.js';
import { bubbleChartConfig } from '../domain/config/bubbleChartConfig'; // 使用现有配置

onMounted(() => {
  new Chart(document.getElementById('bubbleChart').getContext('2d'), bubbleChartConfig);
});
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
</style>
