<script>
  import content_type from "$lib/types";
  import FilterForeignKeys from "./FilterForeignKeys.svelte";
  import FilterSchemes from "./FilterSchemes.svelte";
  import FilterSearch from "./FilterSearch.svelte";

  export let fullscreen = false;
  export let content = content_type;
  export let filters;
</script>

<div class="filter {fullscreen ? 'filterSmall' : ''}">
  <h2>Search</h2>
  <br>
  <h3>Text</h3>
  <FilterSearch bind:arr={filters.text} context={{title: "Text"}} />
  <h3>Fakturanummer</h3>
  <FilterSearch bind:arr={filters.fakturanum} context={{title: "Faktura"}} />
  <h2>Labels</h2>
  <FilterForeignKeys content={content} bind:arr={filters.saljare} context={{column: "saljare", title: "Säljare"}} />
  <FilterForeignKeys content={content} bind:arr={filters.kopare} context={{column: "kopare", title: "Köpare"}} />
  <FilterForeignKeys content={content} bind:arr={filters.arbetstyp} context={{column: "arbetstyp", title: "Arbetstyp"}} />
  <FilterSchemes bind:arr={filters.typ} context={{column: "typ"}} />
  <FilterSchemes bind:arr={filters.valuta} context={{column: "valuta"}} />
</div>

<style lang="scss">
  h2 {
    display: inline-block;
    margin: 15px 30px 15px;
    font-size: 30px;
    font-weight: 100;
  }

  h2:first-child {
    margin: 30px 30px 5px;
  }

  h3 {
    display: inline-block;
    margin: 15px 0 15px 40px;
    font-size: 25px;
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
