<script>
  import "$lib/css/table.scss";
  import raw from "$lib/schemes/raw.json";
  import content_type from "$lib/types";

  export let content = content_type;

  let selected = [1];

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

  function handleForeignKeys(id, column) {
    if (column == "arbetstyp") {
      return handleArbetstyp(id);
    }

    return handleCompany(id, column);
  }

  function handleArbetstyp(id) {
    const obj = content.arbetstyp.filter((obj) => obj.arbetstyp_id == id);
    return obj[0].arbetstyp;
  }

  function handleCompany(id, column = "kopare" || "saljare") {
    let obj = content[column].filter((obj) => obj[column + "_id"] == id);
    obj = obj[0];

    if (obj.name == 1) {
      return obj.rst;
    }

    return obj.copernicus;
  }
</script>

<div class="tableRowContainer">
  <div class="tableRow">
    <div class="tableColumn table-short">
      <button>
        <div class="tableColumnCheck" />
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
{#each content.main.sort( (a, b) => (order.desc ? b[order.column] - a[order.column] : a[order.column] - b[order.column]) ) as row}
  <div class="tableRowContainer">
    <div class="tableRow">
      <div class="tableColumn table-short">
        <button
          on:click={() => {
            selected.includes(row.main_id)
              ? selected.splice(selected.indexOf(row.main_id), 1)
              : selected.push(row.main_id);
            console.log(selected)
          }}
        >
          <div class="tableColumnCheck">
            <span class="material-icons">check</span>
          </div>
        </button>
      </div>
      {#each raw as column}
        <div class="tableColumn {'table-' + column.size}">
          <button disabled>
            <p>
              {["kopare", "saljare", "arbetstyp"].includes(column.column)
                ? handleForeignKeys(row[column.column], column.column)
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
