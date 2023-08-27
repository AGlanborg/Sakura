<script>
  import handleForeignKeys from "$lib/modules/filters/handleForeignKeys";
  import CreateForeignKey from "./CreateForeignKey.svelte";
  import calculateSingleValues from "$lib/modules/create/multiple/calculate/calculateSingleValues";
  import { layoutsSingle, layoutsSingleExceptions } from "$lib/schemes/layouts";

  export let info;
  export let failed;
  export let table;
  export let file;
  export let getContent;
  export let row;

  let foreign = "";

  info["now"] = new Date();

  if (info["now"].getMonth().toString().length < 2) {
    info["now"] =
      info["now"].getFullYear() + "-0" + (info["now"].getMonth() + 1);
  } else {
    info["now"] = info["now"].getFullYear() + "-" + info["now"].getMonth();
  }

  function handleChange(column) {
    if (failed.includes(column)) {
      failed.splice(failed.indexOf(column), 1);
      failed = failed;
    }

    info = calculateSingleValues(info);

    for (let [key, value] of Object.entries(info)) {
      isNaN(value) && typeof value != "string"
        ? (info[key] = "")
        : (info[key] = value);
    }
  }

  $: foreign, getContent();
</script>

<div class="fillBody singleContainer {row ? 'center-column' : 'center-row'}">
  <div class="singleHalf {row ? 'center-column' : 'center-row'}">
    <div class={row ? "row" : "column"}>
      {#each layoutsSingle as obj}
        <!-- Foreign Keys -->
        {#if obj.type == "foreign"}
          <div class="selectRow">
            <select
              class="selectRowInput {failed.includes(obj.column)
                ? 'failed'
                : ''}"
              bind:value={info[obj.column]}
              on:change={() => handleChange(obj.column)}
            >
              <option selected hidden disabled value="">...</option>
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
              {obj.category}
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
          <!-- Typ -->
        {:else if obj.type == "select" && obj.column == "typ"}
          <div class="selectRow">
            <select
              class="selectRowInput {failed.includes(obj.column)
                ? 'failed'
                : ''}"
              id={obj.column}
              bind:value={info[obj.column]}
              on:change={() => handleChange(obj.column)}
            >
              <option selected hidden disabled value="">...</option>
              <option value="Support">Support</option>
              <option value="Service">Service</option>
              <option value="Licens">Licens</option>
            </select>
            <label for={obj.column}>{obj.category} {obj.title}</label>
          </div>
          <!-- Valuta -->
        {:else if obj.type == "select" && obj.column == "valuta"}
          <div class="selectRow">
            <select
              class="selectRowInput {failed.includes(obj.column)
                ? 'failed'
                : ''}"
              id={obj.column}
              bind:value={info[obj.column]}
              on:change={() => handleChange(obj.column)}
            >
              <option selected hidden disabled value="">...</option>
              <option value="SEK" selected>SEK</option>
            </select>
            <label for={obj.column}>{obj.category} {obj.title}</label>
          </div>
          <!-- Months -->
        {:else if obj.type == "month"}
          <div class="selectRow">
            <input
              type="month"
              class="selectRowInput {failed.includes(obj.column)
                ? 'failed'
                : ''}"
              id={obj.column}
              placeholder="yyyy-mm"
              bind:value={info[obj.column]}
              on:input={() => handleChange(obj.column)}
            />
            <label for={obj.column}>{obj.category} {obj.title}</label>
          </div>
          <!-- Text -->
        {:else}
          <div class="selectRow">
            <input
              type="text"
              class="selectRowInput {failed.includes(obj.column)
                ? 'failed'
                : ''}"
              id={obj.column}
              placeholder={obj.title + "..."}
              bind:value={info[obj.column]}
              on:input={() => handleChange(obj.column)}
            />
            <label for={obj.column}>{obj.title}</label>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="singleHalf {row ? 'center-column' : 'center-row'}">
    <div class={row ? "center-row" : "center-column"}>
      <!-- Exceptions -->
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

  .failed {
    outline-color: rgb(200, 50, 50);
  }

  .singleContainer {
    overflow: scroll;
    padding: 0;
    margin: 1.5vh 0 0;
    width: 100vw;
    border: 1px solid rgba(0, 0, 0, 0.1);
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
    padding: 0 20px;
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
    height: 2050px;
    width: 50vw;

    .selectRow {
      margin: 20px 0;
    }
  }
</style>
