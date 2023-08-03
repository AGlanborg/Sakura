<script lang="ts">
  import "$lib/css/table.scss";
  import { layoutsRaw } from "$lib/schemes/layouts/index";
  import handleForeignKeys from "$lib/modules/handleForeignKeys";
  import {
    filterValue,
    filterString,
    filterMonths,
  } from "$lib/modules/filters";
  import type {
    type_content,
    type_filters,
    type_main,
    type_layouts,
  } from "$lib/types/index";

  export let content: type_content;
  export let filters: type_filters;

  let selected: number[] = [];
  let filtered: type_main[] = [];
  let mainColumn: keyof type_main = "main_id";
  let desc: boolean = true;
  let raw: type_layouts[] = layoutsRaw;

  function toggleColumn(obj: any) {
    if (mainColumn == obj.column) {
      desc = !desc;
    } else {
      mainColumn = obj.column;
      desc = true;
    }
  }

  function toggleCheck(row: type_main) {
    selected.includes(row.main_id)
      ? selected.splice(selected.indexOf(row.main_id), 1)
      : selected.push(row.main_id);

    forceUpdate();
  }

  function toggleAllCheck() {
    content.main.every((obj) => selected.includes(obj.main_id))
      ? (selected = [])
      : content.main.forEach((row) => {
          selected.includes(row.main_id) ? "" : selected.push(row.main_id);
        });

    forceUpdate();
  }

  function forceUpdate() {
    /* To counteract a update-state bug */

    mainColumn = mainColumn;
    desc = desc;
    selected = selected;
  }

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

<div class="tableRowContainer">
  <div class="tableRow">
    <div class="tableColumn table-short">
      <button disabled={!filtered.length} on:click={() => toggleAllCheck()}>
        <div class="tableColumnCheck">
          {#if filtered.every( (obj) => selected.includes(obj.main_id) ) && filtered.length}
            <span class="material-icons"> check </span>
          {/if}
        </div>
      </button>
    </div>
    {#each raw as column}
      <div class="tableColumn {'table-' + column.size}">
        {#if column.type == "number"}
          <button on:click={() => toggleColumn(column)}>
            <p>{column.name}</p>
            <span
              class="material-icons {mainColumn == column.column
                ? desc
                  ? 'drop_down'
                  : 'drop_up'
                : ''}">arrow_right</span
            >
          </button>
        {:else}
          <button disabled>
            <p>{column.name}</p>
          </button>
        {/if}
      </div>
    {/each}
  </div>
</div>
{#each filtered.sort( (a, b) => (desc ? Number(b[mainColumn]) - Number(a[mainColumn]) : Number(a[mainColumn]) - Number(b[mainColumn])) ) as row}
  <div class="tableRowContainer">
    <div class="tableRow">
      <div class="tableColumn table-short">
        <button on:click={() => toggleCheck(row)}>
          <div class="tableColumnCheck">
            {#if selected.includes(row.main_id)}
              <span class="material-icons">check</span>
            {/if}
          </div>
        </button>
      </div>
      {#each raw as column}
        <div class="tableColumn {'table-' + column.size}">
          <button disabled>
            <p>
              {["kopare", "saljare", "arbetstyp"].includes(column.column)
                ? handleForeignKeys(content, row[column.column], column.column)
                : row[column.column]}
            </p>
          </button>
        </div>
      {/each}
    </div>
  </div>
{/each}

<style lang="scss">
</style>
