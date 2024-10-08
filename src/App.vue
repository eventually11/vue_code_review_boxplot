<template>
  <div>
    <h1>Data Overview</h1>
    <button @click="toggleComponent">Toggle Chart/Table</button>

    <!-- Display the table, box plot, map, area chart, bubble chart, or order tendency chart depending on the state -->
    <OrderTable v-if="isTableChartVisible" :tableData="tableData" />
    <BoxPlot v-else-if="isBoxPlotVisible" :boxPlotConfig="boxPlotConfig" />
    <MapChart v-else-if="isMapChartVisible" :mapData="mapData" />
    <AreaChart v-else-if="isAreaChartVisible" :areaChartData="areaChartData" />
    <BubbleChart v-else-if="isBubbleChartVisible" :bubbleChartData="bubbleChartData" />
    <OrderTendencyChart v-else :orderTendencyData="orderTendencyData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import OrderTable from './components/TableChart.vue';
import BoxPlot from './components/BoxPlot.vue';
import MapChart from './components/MapChart.vue';
import AreaChart from './components/AreaChart.vue';
import BubbleChart from './components/BubbleChart.vue'; // Import the BubbleChart component
import OrderTendencyChart from './components/OrderTendencyChart.vue'; // Import the OrderTendencyChart component

// Control the visibility of the table, box plot, map, area chart, bubble chart, and order tendency chart
const isTableChartVisible = ref(true);
const isBoxPlotVisible = ref(false);
const isMapChartVisible = ref(false);
const isAreaChartVisible = ref(false);
const isBubbleChartVisible = ref(false);

// Data sources for table, box plot, map, area chart, bubble chart, and order tendency chart
const tableData = ref([]);
const boxPlotConfig = ref({ data: { labels: [], datasets: [] }, options: { responsive: true, title: { display: true, text: 'Box Plot Example' } } });
const mapData = ref([]);
const areaChartData = ref([]);
const bubbleChartData = ref([]);  // For the bubble chart
const orderTendencyData = ref([]);  // For the order tendency chart

// Function to toggle between table, box plot, map, area chart, bubble chart, and order tendency chart
const toggleComponent = () => {
  if (isTableChartVisible.value) {
    isTableChartVisible.value = false;
    isBoxPlotVisible.value = true;
  } else if (isBoxPlotVisible.value) {
    isBoxPlotVisible.value = false;
    isMapChartVisible.value = true;
  } else if (isMapChartVisible.value) {
    isMapChartVisible.value = false;
    isAreaChartVisible.value = true;
  } else if (isAreaChartVisible.value) {
    isAreaChartVisible.value = false;
    isBubbleChartVisible.value = true;
  } else if (isBubbleChartVisible.value) {
    isBubbleChartVisible.value = false;
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

    // Fetch area chart data
    const areaResponse = await axios.get('https://api.example.com/area-data');
    areaChartData.value = areaResponse.data;

    // Fetch bubble chart data
    const bubbleResponse = await axios.get('https://api.example.com/bubble-data');
    bubbleChartData.value = bubbleResponse.data;

    // Fetch order tendency chart data
    const orderTendencyResponse = await axios.get('https://api.example.com/order-tendency-data');
    orderTendencyData.value = orderTendencyResponse.data;

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
