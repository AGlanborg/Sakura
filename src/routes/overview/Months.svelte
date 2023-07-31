<script>
  import "$lib/css/table.scss";
  import content_type from "$lib/types";
  import createMonths from "$lib/modules/createMonths";
  import handleMonth from "$lib/modules/handleMonths";
  import {
    filterValue,
    filterString,
    filterMonths,
  } from "$lib/modules/filters";

  export let content = content_type;
  export let filters;

  let filtered = [];
  let months = [];

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

    monthsSetup();
  }

  function monthsSetup() {
    let now = new Date();
    let now_str = "";
    if (now.getMonth().toString().length < 2) {
      now_str = now.getFullYear() + "-0" + (now.getMonth() + 1);
    } else {
      now_str = now.getFullYear() + "-" + (now.getMonth() + 1);
    }

    months = createMonths(filtered, now_str);
  }

  filterContent();

  $: filters, filterContent();
</script>

<div class="tableRowContainer">
  <div class="tableRow">
    {#each months as column}
      <div class="tableColumn table-default">
        <button disabled>
          <p>{column}</p>
        </button>
      </div>
    {/each}
    {#if months.length < 12}
      {#each [...Array(12 - months.length).keys()] as filler}
        <div class="tableColumn table-default">
          <button disabled>
            <p />
          </button>
        </div>
      {/each}
    {/if}
  </div>
</div>
{#each filtered as row}
  <div class="tableRowContainer">
    <div class="tableRow">
      {#each months as column}
        <div class="tableColumn table-default">
          <button disabled>
            <p>
              {handleMonth(row.start, row.slut, column)
                ? (row.oh / row.perioder).toFixed(2)
                : ""}
            </p>
          </button>
        </div>
      {/each}
      {#if months.length < 12}
        {#each [...Array(12 - months.length).keys()] as filler}
          <div class="tableColumn table-default">
            <button disabled>
              <p />
            </button>
          </div>
        {/each}
      {/if}
    </div>
  </div>
{/each}

<style lang="scss">
</style>
