// box_plot_data_source_interface.ts
export interface BoxPlotDataSourceInterface {
  fetchBoxPlotData(): Promise<any[]>;
}