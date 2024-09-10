// box_plot_data_source.ts
import { boxPlotData } from './box_plot_data';
import { BoxPlotDataSourceInterface } from './box_plot_data_source_interface';

export class BoxPlotDataSource implements BoxPlotDataSourceInterface {
  async fetchBoxPlotData(): Promise<any[]> {
   
    return Promise.resolve(boxPlotData);
  }
}