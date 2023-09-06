<script lang="ts">
  import "$lib/css/filters.scss";
  import MediaQuery from "../MediaQuery.svelte";
  import FilterChart from "./FilterChart.svelte";
  import FilterCategory from "./FilterCategory.svelte";
  import FilterLabels from "./FilterLabels.svelte";
  import type { type_content, type_graphfilters } from "$lib/types/index";

  export let content: type_content;
  export let filters: type_graphfilters;
  export let minimise: boolean;
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
        <FilterCategory content={["tillverkare", "typ"]} bind:arr={filters.category} bind:labels={filters.labels} />
        <h3>Labels</h3>
        <FilterLabels {content} bind:arr={filters.labels} context={{column: filters.category}}/>
        <h3>Dataset</h3>
        <FilterCategory content={["sek", "totalt"]} bind:arr={filters.dataset} />
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
        <FilterCategory content={["tillverkare", "typ"]} bind:arr={filters.category} bind:labels={filters.labels} />
        <h2>Labels</h2>
        <FilterLabels {content} bind:arr={filters.labels} context={{column: filters.category}}/>
        <h2>Dataset</h2>
        <FilterCategory content={["sek", "totalt"]} bind:arr={filters.dataset} />
      {/if}
    </MediaQuery>
  </div>
</div>

<style lang="scss">
</style>
