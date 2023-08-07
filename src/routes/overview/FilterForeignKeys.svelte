<script lang="ts">
  import "$lib/css/filters.scss";
  import type {
    type_content,
    type_saljare,
    type_kopare,
    type_arbetstyp,
  } from "$lib/types/index";

  export let content: type_content;
  export let arr: number[];
  export let context: {
    column: keyof type_content;
    title: string;
  };

  let option: type_saljare[] | type_kopare[] | type_arbetstyp[] = [];
  let list: type_saljare[] | type_kopare[] | type_arbetstyp[] = [];

  function handleSelect(event: any) {
    arr.includes(Number(event.target.value))
      ? ""
      : arr.push(Number(event.target.value));

    event.target.value = "default";

    sortFilters();
  }

  function handleRemove(id: number) {
    arr = arr.filter((val: number) => val != id);

    sortFilters();
  }

  function sortFilters() {
    option = [];
    list = [];

    for (let i = 0; i < content[context.column].length; i += 1) {
      arr.includes(content[context.column][i][context.column + "_id"])
        ? list.push(content[context.column][i])
        : option.push(content[context.column][i]);
    }

    arr = arr;
    list = list;
  }

  sortFilters();
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined">
        {context.column == "saljare"
          ? "sell"
          : context.column == "kopare"
          ? "work_outlined"
          : "folder"}
      </span>
      <p>
        {context.title}
      </p>
    </div>
    <div>
      <span class="material-icons-outlined"> add </span>
    </div>
  </div>
  <select class="selectFilter" on:change={(e) => handleSelect(e)}>
    <option selected disabled hidden value="default" />
    {#each option as res}
      <option value={res[context.column + "_id"]}>
        {context.column == "arbetstyp"
          ? res.arbetstyp
          : res.name
          ? res.rst
          : res.copernicus}
      </option>
    {/each}
  </select>
</div>
<div class="displayContainer">
  {#each list as res}
    <div class="display">
      <div class="center-column">
        <p>
          {context.column == "arbetstyp"
            ? res.arbetstyp
            : res.name
            ? res.rst
            : res.copernicus}
        </p>
      </div>
      <button on:click={() => handleRemove(res[context.column + "_id"])}>
        <span class="material-icons-outlined"> delete </span>
      </button>
    </div>
  {/each}
</div>

<style lang="scss">
</style>
