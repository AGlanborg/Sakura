<script lang="ts">
  import Rows from "./Rows.svelte";
  import Months from "./Months.svelte";
  import downloadCSV from "$lib/modules/csv/download";
  import {
    filterValue,
    filterString,
    filterMonths,
  } from "$lib/modules/filters/filters";
  import type { type_content, type_filters, type_main } from "$lib/types/index";

  export let content: type_content;
  export let filters: type_filters;
  export let minimise: boolean;

  let layout: string = "verifikationer";
  let filtered: type_main[] = [];
  let selected: number[] = [];

  function filterContent() {
    filtered = content.main;

    filtered = filterValue(filters, filtered, "saljare");
    filtered = filterValue(filters, filtered, "kopare");
    filtered = filterValue(filters, filtered, "arbetstyp");
    filtered = filterValue(filters, filtered, "typ");
    filtered = filterValue(filters, filtered, "valuta");
    filtered = filterString(filters, filtered, "text");
    filtered = filterString(filters, filtered, "fakturanum");
    filtered = filterString(filters, filtered, "now");
    filtered = filterString(filters, filtered, "start");
    filtered = filterString(filters, filtered, "slut");
    filtered = filterMonths(filters, filtered, "during");
  }

  filterContent();

  $: filters, filterContent();
</script>

<div class="rowsContainer {minimise ? 'rowsMinimise' : ''}">
  <div class="tableButtonContainer">
    <button class="tableButton">
      <h2>Data</h2>
    </button>
    <select class="tableSelect" bind:value={layout}>
      <option selected value="verifikationer">Summering verifikationer</option>
      <option value="leverantor">Periodiserad leverantörsfakturor</option>
      <option value="oh">Periodiserad OH intäkt</option>
      <option value="raw">Raw</option>
    </select>
    <div class="tableOptionsContainer">
      <button on:click={() => downloadCSV(filtered, selected, layout)}>
        <h3 class="selectNone">Download</h3>
        <span class="material-icons data_download"> download </span>
      </button>
    </div>
  </div>
  <div class="rows">
    <Rows {content} {filtered} {layout} bind:selected />
  </div>
</div>
<div class="monthsContainer {minimise ? 'rowsMinimise' : ''}">
  <div class="tableButtonContainer">
    <button class="tableButton">
      <h2>Months</h2>
    </button>
  </div>
  <div class="months">
    <Months {content} {filtered} {layout} />
  </div>
</div>

<style lang="scss">
  /* Static */
  h2 {
    display: inline-block;
    font-size: 30px;
    font-weight: 100;
  }

  h3 {
    font-weight: 100;
  }

  .tableSelect {
    outline-style: solid;
    outline-width: 2px;
    border-radius: 20px;
    height: 44px;
    width: 300px;
    padding: 0 20px;
  }

  .tableButton {
    height: 50px;
  }

  .data_download {
    margin: 0 0 0 5px;
  }

  /* Default */
  .rowsContainer,
  .monthsContainer {
    position: relative;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin: 4vh 2.5vw;
    padding: 1vh 0;
    left: 0;
  }

  .rows,
  .months {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin: 0 2.5%;
  }

  .tableButtonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tableOptionsContainer {
    padding-right: 2vw;

    button {
      margin: 0 1vw;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    .rowsContainer {
      height: 68vh;
      width: 74vw;
    }

    .monthsContainer {
      height: 46vh;
      width: 74vw;
    }

    .rows {
      height: 64vh;
      width: 71.5vw;
    }

    .months {
      height: 42.5vh;
      width: 71.5vw;
    }

    .tableButtonContainer {
      margin: 0 0 0.5vh 2.5vw;
    }

    .rowsMinimise {
      width: 92vw;
      margin: 4vh 1.2vw;

      .rows,
      .months {
        width: 89vw;
      }
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    h2,
    h3 {
      margin: 0;
    }

    .rowsContainer {
      height: 68vh;
      width: 77vw;
    }

    .monthsContainer {
      height: 46vh;
      width: 77vw;
    }

    .rows {
      height: 60vh;
      width: 74vw;
    }

    .months {
      height: 39vh;
      width: 74vw;
    }

    .tableButtonContainer {
      margin: 0 0 0 3vw;
    }

    .tableOptionsContainer {
      height: 50px;

      button {
        height: 50px;
      }
    }

    .rowsMinimise {
      width: 92vw;

      .rows,
      .months {
        width: 89vw;
      }
    }
  }
</style>
