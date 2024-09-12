<template>
  <div class="area-chart">
    <div class="chart-header">Distance Distribution</div>
    <canvas id="myAreaChart"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { Chart } from 'chart.js';

export default {
  name: 'AreaChart',
  props: {
    areaChartData: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    onMounted(() => {
      const ctx = document.getElementById('myAreaChart').getContext('2d');
      new Chart(ctx, {
        type: 'line', // Assuming it's a line-based area chart
        data: props.areaChartData,
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Distance'
              }
            }
          }
        }
      });
    });
  },
};
</script>

<style scoped>
.area-chart {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.chart-header {
  background-color: #426871;
  color: white;
  text-align: center;
  line-height: 30px;
  height: 30px;
  font-weight: 400;
}
</style>
<template>
  <div class="area-chart">
    <div class="chart-header">Distance Distribution</div>
    <canvas id="myAreaChart"></canvas>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { Chart } from 'chart.js';

export default {
  name: 'AreaChart',
  props: {
    areaChartData: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    onMounted(() => {
      const ctx = document.getElementById('myAreaChart').getContext('2d');
      new Chart(ctx, {
        type: 'line', // Assuming it's a line-based area chart
        data: props.areaChartData,
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Distance'
              }
            }
          }
        }
      });
    });
  },
};
</script>

<style scoped>
.area-chart {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.chart-header {
  background-color: #426871;
  color: white;
  text-align: center;
  line-height: 30px;
  height: 30px;
  font-weight: 400;
}
</style>
