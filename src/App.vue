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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import OrderTable from './components/TableChart.vue';
import BoxPlot from './components/BoxPlot.vue';

// Control the visibility of the table and box plot
const isTableChartVisible = ref(true);

// Table data source, initially empty
const tableData = ref([]);

// Box plot config, initially empty
const boxPlotConfig = ref({
  data: {
    labels: [],
    datasets: []
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

// Fetch data from API on component mount
onMounted(async () => {
  try {
    // Fetch table data from API
    const tableResponse = await axios.get('https://api.example.com/table-data');
    tableData.value = tableResponse.data;

    // Fetch box plot data from API
    const boxPlotResponse = await axios.get('https://api.example.com/boxplot-data');
    boxPlotConfig.value.data = {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [{
        label: 'Observations',
        data: boxPlotResponse.data,  // Use API response for box plot data
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      }]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
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
