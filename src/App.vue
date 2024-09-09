<!-- src/App.vue -->
<template>
  <div>
    <h1>Box Plot Example</h1>
    <!-- Pass boxPlotConfig as a prop to BoxPlot component -->
    <BoxPlot :boxPlotConfig="boxPlotConfig" />
  </div>
</template>

<script setup>
import BoxPlot from './components/BoxPlot.vue';  // Import BoxPlot component
import { boxPlotConfig } from './domain/config/boxplot.js';  // Import data configuration

</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
