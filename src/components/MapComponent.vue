<template>
  <div id="map" style="height: 500px;">
    <l-map :zoom="12" :center="[lat, lng]" style="height: 100%;">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <l-marker :lat-lng="[lat, lng]">
        <l-popup>
          Darwin, Australia
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet';
import 'leaflet/dist/leaflet.css';

// 设置达尔文的地理坐标
const lat = -12.4634;
const lng = 130.8456;
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
