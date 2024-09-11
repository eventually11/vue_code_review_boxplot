<template>
  <div class="funnel-chart">
    <canvas id="funnelChart"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js';
import { FunnelController, TrapezoidElement } from 'chartjs-chart-funnel';
import axios from 'axios';  // Import axios to fetch data

Chart.register(FunnelController, TrapezoidElement);

export default {
  name: 'FunnelChart',
  setup() {
    const funnelChartData = ref(null);

    // Function to fetch data from API
    const fetchFunnelData = async () => {
      try {
        const response = await axios.get('https://api.example.com/funnel-data');
        funnelChartData.value = response.data;
        renderChart();
      } catch (error) {
        console.error('Error fetching funnel chart data:', error);
      }
    };

    // Function to render the funnel chart
    const renderChart = () => {
      const ctx = document.getElementById('funnelChart').getContext('2d');
      new Chart(ctx, {
        type: 'funnel',
        data: {
          labels: funnelChartData.value.labels,
          datasets: [{
            label: 'Funnel Data',
            data: funnelChartData.value.data,
            backgroundColor: funnelChartData.value.colors,
          }],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Funnel Chart Example',
          },
        },
      });
    };

    // Fetch data on mount
    onMounted(() => {
      fetchFunnelData();
    });

    return {};
  }
};
</script>

<style scoped>
.funnel-chart {
  width: 100%;
  height: 400px;
}
</style>
