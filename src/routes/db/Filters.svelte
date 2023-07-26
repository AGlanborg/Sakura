<script>
  import content_type from "$lib/types";
  import SortForeignKeys from "./SortForeignKeys.svelte";
  import SortSchemes from "./SortSchemes.svelte";

  export let fullscreen = false;
  export let content = content_type;
  export let filters;
</script>

<div class="filter {fullscreen ? 'filterSmall' : ''}">
  <h2>Filters</h2>
  <SortForeignKeys content={content} bind:arr={filters.saljare} context={{column: "saljare", title: "Säljare"}} />
  <SortForeignKeys content={content} bind:arr={filters.kopare} context={{column: "kopare", title: "Köpare"}} />
  <SortForeignKeys content={content} bind:arr={filters.arbetstyp} context={{column: "arbetstyp", title: "Arbetstyp"}} />
  <SortSchemes bind:arr={filters.typ} context={{column: "typ"}} />
  <SortSchemes bind:arr={filters.valuta} context={{column: "valuta"}} />
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
