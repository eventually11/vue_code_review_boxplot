import { AreaChartDataSource } from './area_chart_data_source';
import { AreaChartLocalDataSource } from './area_chart_local_data_source';

export class AreaChartRepository {
  private remoteDataSource: AreaChartDataSource;
  private localDataSource: AreaChartLocalDataSource;

  constructor() {
    this.remoteDataSource = new AreaChartDataSource();
    this.localDataSource = new AreaChartLocalDataSource();
  }

  async getAreaChartData() {
    const remoteData = await this.remoteDataSource.getAreaChartData();
    return remoteData.labels.length ? remoteData : this.localDataSource.getAreaChartData();
  }
}
