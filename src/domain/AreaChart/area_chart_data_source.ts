import axios from 'axios';
import { areaChartData } from './area_chart_data';

export class AreaChartDataSource {
  async getAreaChartData() {
    try {
      const response = await axios.get('https://api.example.com/area-data');
      return response.data;
    } catch (error) {
      console.error('Error fetching area chart data, using default data:', error);
      return areaChartData;
    }
  }
}
