<script>
  import calBar from "$lib/modules/canvas/bar";
  import { Bar, Doughnut, Pie, Line, PolarArea } from "svelte-chartjs";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
  } from "chart.js";

  export let content;
  export let filters;

  let canvas;
  let data;

  function setChart() {
    data = calBar(content, filters);

    if (filters.chart == "bar") {
      Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
      );
    } else if (["doughnut", "pie"].includes(filters.chart)) {
      Chart.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
    } else if (filters.chart == "line") {
      Chart.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
      );
    } else if (filters.chart == "polarArea") {
      Chart.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);
    }
  }

  $: filters, setChart();
</script>

<div class="canvasContainer">
  {#if filters.chart == "bar"}
    <Bar {data} options={{ responsive: true }} />
  {:else if filters.chart == "doughnut"}
    <Doughnut {data} options={{ responsive: true }} />
  {:else if filters.chart == "pie"}
    <Pie {data} options={{ responsive: true }} />
  {:else if filters.chart == "line"}
    <Line {data} options={{ responsive: true }} />
  {:else if filters.chart == "polarArea"}
    <PolarArea {data} options={{ responsive: true }} />
  {/if}
</div>

<style>
  .canvasContainer {
    display: flex;
    flex-direction: center;
    align-items: center;
    height: 80%;
    width: 80%;
    margin: 5% 10% 15%;
  }
</style>
