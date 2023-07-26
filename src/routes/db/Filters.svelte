<script>
  import content_type from "$lib/types";
  import SortCompany from "./SortForeignKeys.svelte";

  export let fullscreen = false;
  export let content = content_type;
  export let filters;
</script>

<div class="filter {fullscreen ? 'filterSmall' : ''}">
  <h2>Filters</h2>
  <SortCompany content={content} bind:arr={filters.saljare} context={{column: "saljare", title: "Säljare"}} />
  <SortCompany content={content} bind:arr={filters.kopare} context={{column: "kopare", title: "Köpare"}} />
  <SortCompany content={content} bind:arr={filters.arbetstyp} context={{column: "arbetstyp", title: "Arbetstyp"}} />
</div>

<style lang="scss">
  h2 {
    display: inline-block;
    margin: 30px;
    font-size: 30px;
    font-weight: 100;
  }

  .filter {
    position: fixed;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 4vh 0;
    height: 77vh;
    width: 20vw;
  }

  .filterSmall {
    box-shadow: none;
  }
</style>
