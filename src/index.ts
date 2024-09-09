import { createRouter, createWebHistory } from 'vue-router';
import BoxPlot from '../components/BoxPlot.vue';    // Import BoxPlot component
import TableChart from '../components/TableChart.vue';  // Import TableChart component

const routes = [
    { path: '/boxplot', component: BoxPlot },   // Route for BoxPlot
    { path: '/tablechart', component: TableChart },  // Route for TableChart
];

// 正确导出 router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;  // 确保使用 default 方式导出
