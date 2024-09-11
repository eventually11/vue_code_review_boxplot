import { mapData } from './map.js';  // Import the map data from map.js

export const chartConfig = {
  type: 'bar',  // Assuming a bar chart for map data visualization
  data: {
    labels: mapData.map(item => item.year),  // Extracting year for labels
    datasets: [
      {
        label: 'Series 1',
        data: mapData.map(item => item.series1),  // Data for Series 1
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      },
      {
        label: 'Series 2',
        data: mapData.map(item => item.series2),  // Data for Series 2
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Map Data Chart Example',
    },
  },
};

console.log('Map chart configuration:', chartConfig);
