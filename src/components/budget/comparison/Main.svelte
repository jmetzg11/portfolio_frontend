<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { getComparisonData, comparisonStore, colors } from './helpers';
  import { Chart } from 'chart.js';

  let chartContainer: HTMLCanvasElement | null = null;
  let chart: any = null;

  onMount(async () => {
    getComparisonData();
  });

  const prepareChartData = () => {
    return {
      labels: $comparisonStore.x_labels,
      datasets: $comparisonStore.agencies.map((agency, index) => {
        const color = colors[index];
        return {
          label: agency,
          data: $comparisonStore.data[agency].map((d) => d[1]),
          borderColor: color,
          backgroundColor: color,
          pointBorderColor: color,
          pointBackgroundColor: color,
          borderWidth: 3,
        };
      }),
    };
  };

  $: if ($comparisonStore.agencies.length > 1 && chartContainer) {
    if (chart) {
      chart.destroy();
    }

    console.log('main.svelte', $comparisonStore.data);

    chart = new Chart(chartContainer, {
      type: 'line',
      data: prepareChartData(),
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: 'transparent',
            },
            ticks: {
              padding: 10,
            },
          },
          y: {
            grid: {
              display: false,
              borderColor: 'transparent',
            },
            beginAtZero: true,
            title: {
              display: true,
              text: '$ Billions',
            },
            ticks: {
              callback: function (value, index, values) {
                return '$' + value.toLocaleString();
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: { padding: 20, font: { size: 18 } },
            onHover: function (event, legendItem) {
              const chart = this.chart;
              chart.canvas.style.cursor = 'pointer';
            },
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                return (
                  ' ' +
                  tooltipItem.dataset.label +
                  ' $' +
                  tooltipItem.raw.toLocaleString()
                );
              },
            },
            titleFont: { size: 16 },
            bodyFont: { size: 14 },
          },
        },
      },
    });
  }

  $: if (chartContainer) {
  }

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

<div class="w-full h-[90vh] p-5 flex justify-center items-center outer">
  <div class="w-[95%] h-[84vh] bg-white border border-gray-300 rounded-lg inner">
    <canvas bind:this={chartContainer} class="w-full h-full"></canvas>
  </div>
</div>

<style>
  .outer {
    background-color: #f5f5f5;
    box-sizing: border-box;
  }

  .inner {
    box-sizing: border-box;
  }

  canvas {
    box-sizing: border-box;
  }
</style>
