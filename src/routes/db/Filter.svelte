<script>
  import content_type from "$lib/types";
  import MediaQuery from "../MediaQuery.svelte";
  import FilterForeignKeys from "./FilterForeignKeys.svelte";
  import FilterSearch from "./FilterSearch.svelte";
  import FilterSchemes from "./FilterSchemes.svelte";
  import FilterMonths from "./FilterMonths.svelte";

  export let content = content_type;
  export let filters;
  export let minimise = false;
</script>

<div class="filter">
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
  h2 {
    display: inline-block;
    font-weight: 100;
  }

  h2:first-child {
    margin-top: 30px;
  }

  h3 {
    display: inline-block;
    margin: 15px 0 15px 40px;
    font-size: 25px;
    font-weight: 100;
  }

  .filter {
    position: fixed;
    overflow-y: scroll;
    direction: rtl;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    div {
      direction: ltr;
    }
  }

  .material-icons-outlined {
    position: relative;
    top: 5px;
  }

  .minimiseExpand {
    transform: rotate(180deg);
  }

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    h2 {
      font-size: 30px;
      margin: 15px 20px 15px;
    }

    .filter {
      height: 77vh;
      width: 20vw;
      margin: 4vh 0;
    }

    .minimiseContainer {
      position: absolute;
      right: 0;

      button {
        height: 50px;
        width: 50px;

        .material-icons {
          font-size: 30px;
        }
      }
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    h2 {
      font-size: 20px;
      margin: 15px 0 15px 10px;
    }

    .filter {
      height: 74vh;
      width: 17.5vw;
      margin: 4.5vh 0 0;
    }

    .minimiseContainer {
      position: absolute;
      right: 0vw;

      button {
        height: 40px;
        width: 40px;

        .material-icons {
          font-size: 25px;
        }
      }
    }
  }
</style>
