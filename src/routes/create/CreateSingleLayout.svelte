<script>
  import handleForeignKeys from "$lib/modules/filters/handleForeignKeys";
  import CreateForeignKey from "./CreateForeignKey.svelte";
  import {
    layoutsMultiple,
    layoutsSingle,
    layoutsSingleExceptions,
  } from "$lib/schemes/layouts";

  export let table;
  export let file;
  export let getContent;
  export let row;

  let foreign = "";
  let info = new Object();

  layoutsMultiple.forEach((s) => {
    info[s.column] = "";
  });

  function handleChange() {
    console.log(info);
  }

  $: foreign, getContent();
</script>

<div class="fillBody singleContainer {row ? 'center-column' : 'center-row'}">
  <div class="singleHalf {row ? 'center-column' : 'center-row'}">
    <div class={row ? "row" : "column"}>
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
            <button
              on:click={() =>
                foreign ? (foreign = "") : (foreign = obj.column)}
            >
              {obj.title}
              <span
                class="material-icons-outlined {foreign == obj.column
                  ? 'deg45'
                  : ''}"
              >
                add_circle_outline
              </span>
            </button>
          </div>
        {:else}
          <div class="selectRow">
            <input
              type="text"
              class="selectRowInput"
              id={obj.column}
              placeholder={obj.title + "..."}
              bind:value={info[obj.column]}
              on:input={() => handleChange()}
            />
            <label for={obj.column}>{obj.title}</label>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="singleHalf {row ? 'center-column' : 'center-row'}">
    <div class={row ? "center-row" : "center-column"}>
      {#each layoutsSingleExceptions as obj}
        <div class="selectRow">
          <input
            type="text"
            class="selectRowInput"
            id={obj.column}
            bind:value={info[obj.column]}
            disabled
          />
          <label for={obj.column}>{obj.title}</label>
        </div>
      {/each}
    </div>
  </div>
</div>
{#if foreign}
  <CreateForeignKey bind:column={foreign} {file} />
{/if}

<style lang="scss">
  input:disabled {
    cursor: default;
  }

  .singleContainer {
    overflow: scroll;
    padding: 0;
    margin: 0;
    width: 100vw;
  }

  .singleHalf {
    display: flex;
    padding: 20px;
    transition: none;

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
    transition: none;

    label {
      display: block;
      font-size: 24px;
      font-weight: 800;
      margin: 0 7.5px 5px;
    }

    button {
      justify-content: left;
      font-size: 24px;
      font-weight: 800;
      height: 39px;
      width: 150px;
      margin: 0 7.5px;
      padding: 0;

      span {
        margin-left: 10px;
      }
    }
  }
  /* Row */
  .center-column .singleHalf {
    height: 50%;
    width: 4200px;

    .selectRow {
      margin: 0 15px;
    }

    &:first-child {
      margin-top: 5vh;
    }

    &:last-child {
      margin-bottom: 10vh;
    }
  }

  /* Column */
  .center-row .singleHalf {
    height: 2100px;
    width: 50vw;

    .selectRow {
      margin: 20px 0;
    }
  }
</style>
