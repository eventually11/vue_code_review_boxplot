<!-- src/App.vue -->
<template>
  <div>
    <h1>Order Overview</h1>
    <!-- Pass tableData as a prop to OrderTable -->
    <OrderTable :tableData="tableData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OrderTable from './components/TableChart.vue';  // Import the component
import { tableData as tableDataSource } from './domain/config/tableData.js';  // Import data

// Set tableData as reactive, passing in the imported data
const tableData = ref(tableDataSource);
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
