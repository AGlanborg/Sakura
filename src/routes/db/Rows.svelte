<script>
  export let content = { main: {} };

  import "$lib/css/table.scss";
  import raw from "$lib/schemes/raw.json";

  let order = {
    column: "main_id",
    desc: true
  };

  function toggleColumn(obj = {name: "", size: "", type: "", column: "", position: 0}) {
    if (order.column == obj.column) {
      order.desc = !order.desc
    } else {
      order.column = obj.column
      order.desc = true
    }
  }
</script>

<div class="tableRowContainer">
  <div class="tableRow">
    {#each raw as column}
      <div class="tableColumn {'table-' + column.size}">
        {#if column.type == "number"}
          <button on:click={() => toggleColumn(column)}>
            <p>{column.name}</p>
            <span
              class="material-icons {order.column == column.column ? order.desc ? "drop_down" : "drop_up" : ''}"
              >arrow_right</span
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
{#each Object.values(content.main).sort((a, b) => order.desc ? b[order.column] - a[order.column] : a[order.column] - b[order.column]) as row}
  <div class="tableRowContainer">
    <div class="tableRow">
      {#each raw as column}
        <div class="tableColumn {'table-' + column.size}">
          <button disabled>
            <p>{row[column.column]}</p>
          </button>
        </div>
      {/each}
    </div>
  </div>
{/each}

<style lang="scss">
</style>
