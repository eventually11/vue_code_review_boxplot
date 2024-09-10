// box_plot_repository.ts
import { BoxPlotDataSourceInterface } from './box_plot_data_source_interface';

export class BoxPlotRepository {
  private dataSource: BoxPlotDataSourceInterface;

  constructor(dataSource: BoxPlotDataSourceInterface) {
    this.dataSource = dataSource;
  }

  async getBoxPlotData(): Promise<any[]> {
    return this.dataSource.fetchBoxPlotData();
  }
}
