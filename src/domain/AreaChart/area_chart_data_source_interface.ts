export interface IAreaChartDataSource {
  getAreaChartData(): Promise<{ labels: string[]; datasets: any[] }>;
}
