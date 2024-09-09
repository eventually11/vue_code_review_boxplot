<!-- src/components/OrderTable.vue -->
<template>
  <el-table
    :data="tableData"
    stripe
    max-height="355"
    show-summary
    sum-text="Total"
  >
    <el-table-column sortable prop="date" label="Start Date" />
    <el-table-column sortable prop="order_volume" label="Order Volume" />
    <el-table-column sortable prop="courier_pick_up" label="Courier Pick Up" />
    <el-table-column sortable prop="complete_order_volume" label="Complete Order Volume" />
    <el-table-column sortable prop="service_mins" label="Service Mins" />
  </el-table>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props that the component will receive
const props = defineProps({
  tableData: Array  // Receive the data via props
});
</script>

<style scoped>
.el-table {
  width: 100%;
}
</style>
