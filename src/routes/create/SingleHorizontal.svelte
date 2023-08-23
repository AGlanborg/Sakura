<script>
  import handleForeignKeys from "$lib/modules/filters/handleForeignKeys";
  import { layoutsSingle, layoutsSingleExceptions } from "$lib/schemes/layouts";

  export let info;
  export let table;

  function handleChange() {
    console.log(info);
  }
</script>

<div class="fillBody center-column singleContainer">
  <div class="singleHalf center-column">
    <div class="row">
      {#each layoutsSingle as obj}
        {#if obj.type == "select"}
          <div class="selectRow">
            <select
              class="selectRowInput"
              bind:value={info[obj.column]}
              on:change={() => handleChange()}
            >
              <option selected disabled hidden />
              {#each table[obj.column] as row}
                <option value={row[obj.column + "_id"]}>
                  {handleForeignKeys(
                    table,
                    row[obj.column + "_id"],
                    obj.column
                  )}
                </option>
              {/each}
            </select>
            <h2>{obj.title}</h2>
          </div>
        {:else}
          <div class="selectRow">
            <input
              type="text"
              class="selectRowInput"
              placeholder={obj.title + "..."}
              bind:value={info[obj.column]}
              on:input={() => handleChange()}
            />
            <h2>{obj.title}</h2>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="singleHalf center-column">
    <div class="center-row">
      {#each layoutsSingleExceptions as obj}
        <div class="selectRow">
          <input
            type="text"
            class="selectRowInput"
            bind:value={info[obj.column]}
            disabled
          />
          <h2>{obj.title}</h2>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .singleContainer {
    overflow-x: scroll;
    padding: 0;
    margin: 0;
    width: 100vw;
  }

  .singleHalf {
    display: flex;
    height: 50%;
    width: 4100px;
    padding: 20px 20px 20px 60px;

    &:last-child .selectRow {
      margin-bottom: 150px;
    }
  }

  .selectRowInput {
    display: block;
    outline-style: solid;
    outline-width: 3px;
    border-radius: 10px;
    font-size: 20px;
    margin: 0;
    width: 200px;
    height: 50px;
    padding: 0 10px;
  }

  .selectRow {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 10px;

    h2 {
      display: block;
      margin: 0 5px 5px;
    }
  }
</style>
