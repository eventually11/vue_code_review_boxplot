import axios from 'axios';
import { funnelChartData } from './funnel_chart_data';

export class FunnelChartDataSource {
  async getFunnelChartData() {
    try {
      const response = await axios.get('https://api.example.com/funnel-data');
      return response.data;
    } catch (error) {
      console.error('Error fetching funnel data, using default data:', error);
      return funnelChartData;
    }
  }
}
