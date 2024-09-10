axios.get('boxPlotData')
  .then(response => {
    console.log(response.data); // Ensure the data is logged
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
