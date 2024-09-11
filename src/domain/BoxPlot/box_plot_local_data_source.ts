// box_plot_local_data_source.ts
import { BoxPlotDataSourceInterface } from './box_plot_data_source_interface';
import { boxPlotData } from './boxplot.js';

export class BoxPlotLocalDataSource implements BoxPlotDataSourceInterface {
  async fetchBoxPlotData(): Promise<any[]> {
  
    return Promise.resolve(boxPlotData);
  }
}