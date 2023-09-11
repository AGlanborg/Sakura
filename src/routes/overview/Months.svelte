<script lang="ts">
  import "$lib/css/table.scss";
  import createMonths from "$lib/modules/months/createMonths";
  import handleMonth from "$lib/modules/filters/handleMonths";
  import type { type_content, type_filters, type_main } from "$lib/types/index";

  export let content: type_content;
  export let filtered: type_main[];
  export let layout: string;

  let months: string[] = [];

  function monthsSetup() {
    let now = new Date();
    let now_str = "";
    if (now.getMonth().toString().length < 2) {
      now_str = now.getFullYear() + "-0" + now.getMonth();
    } else {
      now_str = now.getFullYear() + "-" + now.getMonth();
    }

    months = createMonths(filtered, now_str);
  }

  $: filtered, monthsSetup();
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
      {#each [...Array(12 - months.length)] as filler}
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
                ? layout == "oh"
                ? (row.oh / row.perioder).toFixed(2)
                : (row.inpris / row.perioder).toFixed(2)
                : ""}
            </p>
          </button>
        </div>
      {/each}
      {#if months.length < 12}
        {#each [...Array(12 - months.length)] as filler}
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
