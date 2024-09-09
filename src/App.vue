<template>
  <div>
    <h1>Data Overview</h1>
    <!--  -->
    <button @click="toggleComponent">Toggle Chart/Table</button>
    
    <!--  isTableChartVisible  -->
    <OrderTable v-if="isTableChartVisible" :tableData="tableData" />
    <BoxPlot v-else :boxPlotConfig="boxPlotConfig" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OrderTable from './components/TableChart.vue';  // Import TableChart component
import BoxPlot from './components/BoxPlot.vue';  // Import BoxPlot component

import { tableData as tableDataSource } from './domain/config/tableData.js';  // Import table data
import { boxPlotConfig } from './domain/config/boxplot.js';  // Import box plot configuration

// Define reactive state for which component to show
const isTableChartVisible = ref(true);  // Initially show table chart

// Define reactive data for table
const tableData = ref(tableDataSource);

// Toggle function to switch between components
const toggleComponent = () => {
  isTableChartVisible.value = !isTableChartVisible.value;
};
console.log('tableData in App.vue:', tableData.value);
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
button {
  margin-bottom: 20px;
}
</style>
