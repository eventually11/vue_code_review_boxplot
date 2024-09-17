const axios = require('axios');

const getFunnelChartData = async () => {
  try {
    const response = await axios.get('https://api.example.com/funnel-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching funnel chart data:', error);
    return [];
  }
};

module.exports = {
  getFunnelChartData
};
