<script>
  import "$lib/css/table.scss";
  import raw from "$lib/schemes/raw.json";
  import content_type from "$lib/types";
  import handleForeignKeys from "$lib/modules/handleForeignKeys";

  export let content = content_type;
  export let filters;

  let selected = [];
  let filtered = [];
  let order = {
    column: "main_id",
    desc: true,
  };

  function toggleColumn(obj) {
    if (order.column == obj.column) {
      order.desc = !order.desc;
    } else {
      order.column = obj.column;
      order.desc = true;
    }
  }

  function toggleCheck(row) {
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

    order = order;
    selected = selected;
  }

  function filterContent() {
    filtered = content.main

    filterValue(filters.saljare, "saljare")
    filterValue(filters.kopare, "kopare")
    filterValue(filters.arbetstyp, "arbetstyp")
    filterValue(filters.typ, "typ")
    filterValue(filters.valuta, "valuta")
  }

  function filterValue(val, column) {
    if (val.length) {
      let res = []

      filtered.forEach((obj) => val.includes(obj[column]) ? res.push(obj) : "")

      filtered = res
    }
  }

  filterContent()

  $: filters, filterContent()
</script>

<div class="tableRowContainer">
  <div class="tableRow">
    <div class="tableColumn table-short">
      <button disabled={!filtered.length} on:click={() => toggleAllCheck()}>
        <div class="tableColumnCheck">
          {#if filtered.every((obj) => selected.includes(obj.main_id)) && filtered.length}
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
              class="material-icons {order.column == column.column
                ? order.desc
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
{#each filtered.sort( (a, b) => (order.desc ? b[order.column] - a[order.column] : a[order.column] - b[order.column]) ) as row}
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
