<script lang="ts">
  import "$lib/css/filters.scss";
  import MediaQuery from "../MediaQuery.svelte";
  import FilterChart from "./FilterChart.svelte";
  import FilterSelect from "./FilterSelect.svelte";
  import FilterLabels from "./FilterLabels.svelte";
  import calMinMaxYears from "$lib/modules/months/calMinMaxYears";
  import type { type_content, type_graphfilters } from "$lib/types/index";

  export let content: type_content;
  export let filters: type_graphfilters;
  export let minimise: boolean;

  let years = []

  function calYears() {
    years = []
    const filtered = content.main.filter(row => filters.labels.includes(row[filters.category]))
    const [min, max] = calMinMaxYears(filtered)

    for (let i = min; i <= max; i += 1) {
      years.push(i)
    }
  }

  $: filters, calYears()
</script>

<div class="filter {minimise ? 'minimiseFilter' : ''}">
  <div>
    <MediaQuery query="(min-width: 1601px)" let:matches>
      {#if matches}
        <div class="minimiseContainer">
          <button on:click={() => (minimise = !minimise)}>
            <span class="material-icons {minimise ? 'minimiseExpand' : ''}">
              keyboard_arrow_left
            </span>
          </button>
        </div>
        <h2>
          Graph
        </h2>
        <br>
        <h3>Chart</h3>
        <FilterChart bind:arr={filters.chart} />
        <h2>
          Data
        </h2>
        <br>
        <h3>Category</h3>
        <FilterSelect content={["tillverkare", "typ"]} bind:arr={filters.category} bind:labels={filters.labels} />
        <div class="filterSeperator" />
        <h3>Labels</h3>
        <FilterLabels {content} bind:arr={filters.labels} context={{column: filters.category}}/>
        <h3>Dataset</h3>
        <FilterSelect content={["sek", "totalt"]} bind:arr={filters.dataset} />
        <div class="filterSeperator" />
        <h3>Data Display</h3>
        <FilterSelect content={["months", "years"]} bind:arr={filters.time} />
        {#if filters.time == "months"}
        <h2>
          Date
        </h2>
        <br>
          {#if years.length}
            <h3>Year</h3>
            <FilterSelect content={years} bind:arr={filters.year} />
          {/if}
        {/if}
      {/if}
    </MediaQuery>
    <MediaQuery query="(max-width: 1600px)" let:matches>
      {#if matches}
        <div class="minimiseContainer">
          <button on:click={() => (minimise = !minimise)}>
            <span class="material-icons {minimise ? 'minimiseExpand' : ''}">
              keyboard_arrow_left
            </span>
          </button>
        </div>
        <h2>Chart</h2>
        <FilterChart bind:arr={filters.chart} />
        <h2>Category</h2>
        <FilterSelect content={["tillverkare", "typ"]} bind:arr={filters.category} bind:labels={filters.labels} />
        <h2>Labels</h2>
        <FilterLabels {content} bind:arr={filters.labels} context={{column: filters.category}}/>
        <h2>Dataset</h2>
        <FilterSelect content={["sek", "totalt"]} bind:arr={filters.dataset} />
        <h2>Data Display</h2>
        <FilterSelect content={["months", "years"]} bind:arr={filters.time} />
        {#if filters.time == "months"}
          <h2>Year</h2>
          <FilterSelect bind:content={years} bind:arr={filters.year} />
        {/if}
      {/if}
    </MediaQuery>
  </div>
</div>

<style lang="scss">
  .filterSeperator {
    margin-bottom: 16px;
  }
</style>
