import { FunnelChartDataSource } from './funnel_chart_data_source';
import { FunnelChartLocalDataSource } from './funnel_chart_local_data_source';

export class FunnelChartRepository {
  private remoteDataSource: FunnelChartDataSource;
  private localDataSource: FunnelChartLocalDataSource;

  constructor() {
    this.remoteDataSource = new FunnelChartDataSource();
    this.localDataSource = new FunnelChartLocalDataSource();
  }

  async getFunnelChartData() {
    const remoteData = await this.remoteDataSource.getFunnelChartData();
    return remoteData.length ? remoteData : this.localDataSource.getFunnelChartData();
  }
}
