<script lang="ts">
  import "$lib/css/filters.scss";
  import MediaQuery from "../MediaQuery.svelte";
  import FilterForeignKeys from "./FilterForeignKeys.svelte";
  import FilterSearch from "./FilterSearch.svelte";
  import FilterSchemes from "./FilterSchemes.svelte";
  import FilterMonths from "./FilterMonths.svelte";
  import type { type_content, type_filters } from "$lib/types/index";

  export let content: type_content;
  export let filters: type_filters;
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
        <h2>Search</h2>
        <br />
        <h3>Text</h3>
        <FilterSearch bind:arr={filters.text} context={{ title: "Text" }} />
        <h3>Fakturanummer</h3>
        <FilterSearch
          bind:arr={filters.fakturanum}
          context={{ title: "Faktura" }}
        />
        <h2>Labels</h2>
        <FilterForeignKeys
          {content}
          bind:arr={filters.saljare}
          context={{ column: "saljare", title: "Säljare" }}
        />
        <FilterForeignKeys
          {content}
          bind:arr={filters.kopare}
          context={{ column: "kopare", title: "Köpare" }}
        />
        <FilterForeignKeys
          {content}
          bind:arr={filters.arbetstyp}
          context={{ column: "arbetstyp", title: "Arbetstyp" }}
        />
        <FilterSchemes bind:arr={filters.typ} context={{ column: "typ" }} />
        <FilterSchemes
          bind:arr={filters.valuta}
          context={{ column: "valuta" }}
        />
        <h2>Months</h2>
        <br />
        <h3>Created</h3>
        <FilterMonths bind:arr={filters.now} />
        <h3>Start</h3>
        <FilterMonths bind:arr={filters.start} />
        <h3>End</h3>
        <FilterMonths bind:arr={filters.slut} />
        <h3>During</h3>
        <abbr
          title="Enter a month to filter all rows that starts before and ends after that month"
        >
          <span class="material-icons-outlined"> info </span>
        </abbr>
        <FilterMonths bind:arr={filters.during} />
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
        <h2>Text</h2>
        <FilterSearch bind:arr={filters.text} context={{ title: "Text" }} />
        <h2>Fakturanummer</h2>
        <FilterSearch
          bind:arr={filters.fakturanum}
          context={{ title: "Faktura" }}
        />
        <h2>Labels</h2>
        <FilterForeignKeys
          {content}
          bind:arr={filters.saljare}
          context={{ column: "saljare", title: "Säljare" }}
        />
        <FilterForeignKeys
          {content}
          bind:arr={filters.kopare}
          context={{ column: "kopare", title: "Köpare" }}
        />
        <FilterForeignKeys
          {content}
          bind:arr={filters.arbetstyp}
          context={{ column: "arbetstyp", title: "Arbetstyp" }}
        />
        <FilterSchemes bind:arr={filters.typ} context={{ column: "typ" }} />
        <FilterSchemes
          bind:arr={filters.valuta}
          context={{ column: "valuta" }}
        />
        <h2>Created</h2>
        <FilterMonths bind:arr={filters.now} />
        <h2>Start</h2>
        <FilterMonths bind:arr={filters.start} />
        <h2>End</h2>
        <FilterMonths bind:arr={filters.slut} />
        <h2>During</h2>
        <abbr
          title="Enter a month to filter all rows that starts before and ends after that month"
        >
          <span class="material-icons-outlined"> info </span>
        </abbr>
        <FilterMonths bind:arr={filters.during} />
      {/if}
    </MediaQuery>
  </div>
</div>

<style lang="scss">
</style>
