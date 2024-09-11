import { boxPlotData } from './box_plot_data';  


const chartConfig = {
  type: 'boxplot',  
  data: {
    labels: ['Category 1', 'Category 2', 'Category 3'],  
    datasets: [{
      label: 'Observations',
      data: boxPlotData,  
      borderColor: 'rgba(0, 123, 255, 1)',
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Box Plot Example'
    }
  }
};


console.log('Box plot chart configuration:', chartConfig);
