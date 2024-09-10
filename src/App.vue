<template>
  <div>
    <h1>Data Overview</h1>
    <button @click="toggleComponent">Toggle Chart/Table</button>

    <!-- Display the table or the box plot depending on the state -->
    <OrderTable v-if="isTableChartVisible" :tableData="tableData" />
    <BoxPlot v-else :boxPlotConfig="boxPlotConfig" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OrderTable from './components/TableChart.vue';
import BoxPlot from './components/BoxPlot.vue';
import { boxPlotData } from './domain/BoxPlot/boxplot.js';  // Import boxplot data
import { tableData as tableDataSource } from './domain/TableChart/tableData.js';

// Control the visibility of the table and box plot
const isTableChartVisible = ref(true);

// Table data source
const tableData = ref(tableDataSource);

// Define the box plot configuration, including type, data, and options
const boxPlotConfig = ref({
  data: {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [{
      label: 'Observations',
      data: boxPlotData,  // Pass the box plot data here
      borderColor: 'rgba(0, 123, 255, 1)',
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Box Plot Example'
    }
  }
});

// Function to toggle between the table and the box plot
const toggleComponent = () => {
  isTableChartVisible.value = !isTableChartVisible.value;
};
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
