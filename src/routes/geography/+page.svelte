<script>
	import { onDestroy, onMount } from 'svelte';
	import { normalizeData } from './helpers';
	import { data } from './data';
	import Header from './Header.svelte';

	let map;
	let year = 'all';
	let markers = [];
	onMount(() => {
		const leafletCss = document.createElement('link');
		leafletCss.rel = 'stylesheet';
		leafletCss.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
		document.head.appendChild(leafletCss);

		const leafletScript = document.createElement('script');
		leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
		leafletScript.onload = () => {
			initializeMap();
			const normalizedData = normalizeData(data, year);
			addMarkers(normalizedData);
		};
		document.head.appendChild(leafletScript);
	});

	function initializeMap() {
		const corner1 = L.latLng(-90, -180);
		const corner2 = L.latLng(90, 180);
		const bounds = L.latLngBounds(corner1, corner2);
		map = L.map('map', {
			center: [0, 0],
			zoom: 3,
			maxBounds: bounds,
			maxBoundsViscosity: 0.8
		});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);
	}

	function addMarkers(data) {
		data.forEach((item) => {
			const marker = L.circleMarker([item.lat, item.lng], {
				radius: item.normalizedValue,
				color: item.color,
				fillColor: item.color,
				fillOpacity: 0.5
			})
				.addTo(map)
				.bindTooltip(
					`<div style="font-size: 14px; line-height: 1.4;">
						<div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">${item.location}</div>
						<div style="font-style: italic; color: #555;">${item.text}</div>
						<div style="color: #333; font-size: 13px; margin-top: 4px;">Years: ${item.years}</div>
					</div>`,
					{
						permanent: false,
						direction: 'top'
					}
				);
			markers.push(marker);
		});
	}

	$: {
		if (map) {
			markers.forEach((marker) => {
				map.removeLayer(marker);
			});
			markers = [];
			const normalizedData = normalizeData(data, year);
			addMarkers(normalizedData);
		}
	}

	onDestroy(() => {
		if (map) {
			map.remove();
			map = null;
		}
	});
</script>

<div class="w-full h-screen flex flex-col">
	<Header {year} on:change={(e) => (year = e.detail)} />
	<div id="map" class="w-full h-[90%]"></div>
</div>

<style>
	#map {
		width: 100%;
	}
</style>
