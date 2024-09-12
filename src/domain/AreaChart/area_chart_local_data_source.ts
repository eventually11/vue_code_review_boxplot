import { areaChartData } from './area_chart_data';
import { IAreaChartDataSource } from './area_chart_data_source_interface';

export class AreaChartLocalDataSource implements IAreaChartDataSource {
  async getAreaChartData() {
    return areaChartData;
  }
}
