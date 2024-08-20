<script lang="ts">
  import { onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';
  import { barDataStore } from './helpers';
  import type { BarChartType } from './helpers';

  let chartContainer: HTMLCanvasElement | null = null;
  let chart: any = null;

  const prepareChartData = (): BarChartType => {
    const barData = $barDataStore;

    return {
      labels: barData.map((item) => item.year.toString()),
      datasets: [
        {
          label: 'Amount',
          data: barData.map((item) => Math.round(item.amount / 1000000)),
          backgroundColor: '#9ad5fc',
          borderColor: '#9ad5fc',
          borderWidth: 1,
        },
      ],
    };
  };

  $: if ($barDataStore.length > 0 && chartContainer) {
    if (!chart) {
      chart = new Chart(chartContainer, {
        type: 'bar',
        data: prepareChartData(),
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return '$' + value.toLocaleString() + 'M';
                },
              },
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              displayColors: false,
              callbacks: {
                label: function (context: any) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  label += '$' + context.raw.toLocaleString() + 'M';
                  return label;
                },
              },
            },
          },
        },
      });
    } else {
      chart.data = prepareChartData();
      chart.update();
    }
  }

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

<canvas bind:this={chartContainer}></canvas>

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
