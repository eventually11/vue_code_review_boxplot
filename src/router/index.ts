import { createRouter, createWebHistory } from 'vue-router';
import BoxPlot from '../components/BoxPlot.vue';    // Import BoxPlot component
import TableChart from '../components/TableChart.vue';  // Import TableChart component

const routes = [
    { path: '/boxplot', component: BoxPlot },   // Route for BoxPlot
    { path: '/tablechart', component: TableChart },  // Route for TableChart
];

const router = createRouter({
    history: createWebHistory(),  // Use Web History API for navigation
    routes,
});

export default router;
