<script context="module" lang="ts">
  declare const L: any;
</script>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { mapDataStore, type MapDataItem } from './helpers';

  let map: any;
  let markers: any[] = [];

  const unsubscribe = mapDataStore.subscribe((mapData: MapDataItem[]) => {
    if (map && mapData && mapData.length > 0) {
      markers.forEach((marker) => map.removeLayer(marker));
      markers = [];

      mapData.forEach(({ lat, lng, text, size, amount }) => {
        const formattedAmount = amount.toLocaleString();
        const marker = L.circleMarker([lat, lng], {
          radius: size,
          color: 'rgb(48, 77, 109)',
          weight: 1,
          fillColor: 'rgba(48, 77, 109, 0.8)',
          fillOpacity: 0.5,
        })
          .addTo(map)
          .bindTooltip(`${text}: $${formattedAmount}`);
        markers.push(marker);
      });
    }
  });

  onMount(() => {
    map = L.map('map').setView([11.505, -0.09], 3);

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }
    ).addTo(map);
  });

  onDestroy(() => {
    unsubscribe();
    if (map) {
      map.remove();
    }
  });
</script>

<div class="w-100 h-[70vh]" id="map"></div>
