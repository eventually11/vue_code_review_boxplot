import { funnelChartData } from './funnel_chart_data';
import { IFunnelChartDataSource } from './funnel_chart_data_source_interface';

export class FunnelChartLocalDataSource implements IFunnelChartDataSource {
  async getFunnelChartData() {
    return funnelChartData;
  }
}
