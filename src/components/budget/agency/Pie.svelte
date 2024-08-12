<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';
  import type { AgencyEntry } from './helpers';

  let chartContainer: HTMLCanvasElement | null = null;
  let chart: any = null;

  export let data: AgencyEntry[];

  onMount(() => {
    if (chartContainer) {
      chart = new Chart(chartContainer, {
        type: 'pie',
        data: {
          labels: data.map((value) => value.label),
          datasets: [
            {
              backgroundColor: data.map((value) => value.background_color),
              borderColor: new Array(10).fill('#fff'),
              borderWidth: 1,
              data: data.map((value) => value.value),
            },
          ],
        },
        options: {
          responsive: true,
          animation: { duration: 1000 },
          plugins: {
            legend: {
              display: true,
              labels: { padding: 5, font: { size: 14 } },
              onHover: function (event, legendItem) {
                const chart = this.chart;
                chart.canvas.style.cursor = 'pointer';
              },
            },
            title: {
              display: false,
            },
            tooltip: {
              enabled: true,
              callbacks: {
                title: function (tooltipItems) {
                  const item = data[tooltipItems[0].dataIndex];
                  return `${item.tooltip}`;
                },
                label: function (tooltipItem: any) {
                  return `$${tooltipItem.raw.toLocaleString()}`;
                },
              },
            },
          },

          maintainAspectRatio: false,
          aspectRatio: 1,
        },
      });
    }
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

<canvas bind:this={chartContainer}></canvas>

<style>
  canvas {
    with: 100%;
    height: 100%;
  }
</style>
