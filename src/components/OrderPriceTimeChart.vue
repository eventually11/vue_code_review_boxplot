<!-- src/components/TableChart.vue -->
<template>
  <div>
    <el-table
      stripe
      :data="tableData"
      max-height="355"
      show-summary
      sum-text="sum"
    >
      <el-table-column sortable prop="date" label="Start Date"/>
      <el-table-column sortable prop="order_volume" label="Order Volume"/>
      <el-table-column sortable prop="courier_pick_up" label="Courier Pick Up"/>
      <el-table-column sortable prop="complete_order_volume" label="Complete Order Volume"/>
      <el-table-column sortable prop="service_mins" label="Service Mins"/>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const tableData = ref([
  {
    date: '2024-08-21',
    order_volume: 120,
    courier_pick_up: 35,
    complete_order_volume: 100,
    service_mins: 45
  },
  {
    date: '2024-08-22',
    order_volume: 130,
    courier_pick_up: 40,
    complete_order_volume: 110,
    service_mins: 50
  },
  {
    date: '2024-08-23',
    order_volume: 140,
    courier_pick_up: 42,
    complete_order_volume: 120,
    service_mins: 55
  },
  {
    date: '2024-08-24',
    order_volume: 150,
    courier_pick_up: 38,
    complete_order_volume: 130,
    service_mins: 60
  },
  {
    date: '2024-08-25',
    order_volume: 160,
    courier_pick_up: 45,
    complete_order_volume: 140,
    service_mins: 65
  },
  {
    date: '2024-08-26',
    order_volume: 170,
    courier_pick_up: 50,
    complete_order_volume: 150,
    service_mins: 70
  }
]);
</script>

<style scoped>
.el-table {
  width: 100%;
}
</style>
