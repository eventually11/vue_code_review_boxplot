<template>
  <div>
    <h1>Data Overview</h1>
    <button @click="toggleComponent">Toggle Chart/Table</button>

    <!-- Display the table, box plot, map, or funnel chart depending on the state -->
    <OrderTable v-if="isTableChartVisible" :tableData="tableData" />
    <BoxPlot v-else-if="isBoxPlotVisible" :boxPlotConfig="boxPlotConfig" />
    <MapChart v-else-if="isMapChartVisible" :mapData="mapData" />
    <FunnelChart v-else :funnelData="funnelData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import OrderTable from './components/TableChart.vue';
import BoxPlot from './components/BoxPlot.vue';
import MapChart from './components/MapChart.vue';  
import FunnelChart from './components/FunnelChart.vue';  // Import the FunnelChart component

// Control the visibility of the table, box plot, map, and funnel chart
const isTableChartVisible = ref(true);
const isBoxPlotVisible = ref(false);
const isMapChartVisible = ref(false);

// Data sources for table, box plot, map, and funnel chart
const tableData = ref([]);
const boxPlotConfig = ref({ data: { labels: [], datasets: [] }, options: { responsive: true, title: { display: true, text: 'Box Plot Example' } } });
const mapData = ref([]);
const funnelData = ref([]);  // For the funnel chart

// Function to toggle between table, box plot, map, and funnel chart
const toggleComponent = () => {
  if (isTableChartVisible.value) {
    isTableChartVisible.value = false;
    isBoxPlotVisible.value = true;
  } else if (isBoxPlotVisible.value) {
    isBoxPlotVisible.value = false;
    isMapChartVisible.value = true;
  } else if (isMapChartVisible.value) {
    isMapChartVisible.value = false;
  } else {
    isTableChartVisible.value = true;
  }
};

// Fetch data from API on component mount
onMounted(async () => {
  try {
    // Fetch table data
    const tableResponse = await axios.get('https://api.example.com/table-data');
    tableData.value = tableResponse.data;

    // Fetch box plot data
    const boxPlotResponse = await axios.get('https://api.example.com/boxplot-data');
    boxPlotConfig.value.data = {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [{
        label: 'Observations',
        data: boxPlotResponse.data,
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      }]
    };

    // Fetch map data
    const mapResponse = await axios.get('https://api.example.com/map-data');
    mapData.value = mapResponse.data;

    // Fetch funnel chart data
    const funnelResponse = await axios.get('https://api.example.com/funnel-data');
    funnelData.value = funnelResponse.data;

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
