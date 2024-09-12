export interface IAreaChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
  }[];
}

// Empty interface that expects to be populated with data externally
export const areaChartData: IAreaChartData = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [],
      fill: true,
      borderColor: '',
      backgroundColor: '',
    }
  ]
};
