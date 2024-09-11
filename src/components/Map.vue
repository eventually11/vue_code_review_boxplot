<template>
  <div id="map" ref="map" style="height: 100vh; width: 100%;"></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

export default {
  name: 'Heatmap',
  setup() {
    const map = ref(null);

    onMounted(() => {
      map.value = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map.value);

      // Fetch heatmap data from the API
      fetch('https://api.example.com/heatmap-data')
        .then(response => response.json())
        .then(data => {
          // Assuming the API returns an array of [lat, lng, intensity] for the heatmap
          const heatData = data.map(item => [item.lat, item.lng, item.intensity]);

          // Add heat layer with the fetched data
          L.heatLayer(heatData, {
            radius: 25,
            blur: 15,
            maxZoom: 17,
          }).addTo(map.value);
        })
        .catch(error => {
          console.error('Error fetching heatmap data:', error);
        });

      const logMapInfo = () => {
        const zoom = map.value.getZoom();
        const center = map.value.getCenter();
        console.log(`Current Zoom Level: ${zoom}`);
        console.log(`Current Center: Latitude ${center.lat}, Longitude ${center.lng}`);
      };

      logMapInfo();
      map.value.on('moveend', logMapInfo);
      map.value.on('zoomend', logMapInfo);
    });

    return {
      map,
    };
  },
};
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100%;
}
</style>
