<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';

  let chartContainer: HTMLCanvasElement | null = null;
  let chart: any = null;

  export let data;
  console.log(data);

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
          plugins: {
            legend: {
              display: true,
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
                label: function (tooltipItem) {
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
