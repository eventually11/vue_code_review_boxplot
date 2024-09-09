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

// Register required components
Chart.register(...registerables, BoxPlotController, BoxAndWiskers);

// Accept the boxPlotConfig as a prop from the parent
const props = defineProps({
  boxPlotConfig: Object
});

// Initialize the chart on mount
onMounted(() => {
  new Chart(document.getElementById('boxPlotChart').getContext('2d'), props.boxPlotConfig);
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
