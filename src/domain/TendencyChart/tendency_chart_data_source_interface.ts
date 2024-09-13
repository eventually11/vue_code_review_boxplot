export interface IFunnelChartDataSource {
  getFunnelChartData(): Promise<{ stage: string; value: number }[]>;
}
