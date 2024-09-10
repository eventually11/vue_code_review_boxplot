<template>
  <div class="chart-container">
    <canvas id="boxPlotChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { BoxPlotController, BoxAndWiskers } from '@sgratzl/chartjs-chart-boxplot';

// Register the necessary components
Chart.register(...registerables, BoxPlotController, BoxAndWiskers);

// Accept the boxPlotConfig as a prop from the parent component
const props = defineProps({
  boxPlotConfig: Object
});

// Initialize the chart when the component is mounted
onMounted(() => {
  const ctx = document.getElementById('boxPlotChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'boxplot',  // Ensure that the chart type is 'boxplot'
    data: props.boxPlotConfig.data,  // The box plot data
    options: props.boxPlotConfig.options  // Additional chart options
  });
});
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
}
</style>
