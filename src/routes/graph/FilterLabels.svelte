<script lang="ts">
  import type { type_content } from "$lib/types/index";

  export let content: type_content;
  export let arr: string[];
  export let context: { column: string };

  let option: string[] = [];
  let list: string[] = [];

  function handleSelect(event: any) {
    arr.includes(event.target.value) ? "" : arr.push(event.target.value);

    event.target.value = "default";

    sortFilters();
  }

  function handleRemove(str: string) {
    arr = arr.filter((val: string) => val != str);

    sortFilters();
  }

  function sortFilters() {
    option = [];
    list = [];

    for (let i = 0; i < content.main.length; i += 1) {
      arr.includes(content.main[i][context.column])
        ? list.includes(content.main[i][context.column])
        ? ""
        : list.push(content.main[i][context.column])
        : option.includes(content.main[i][context.column])
        ? ""
        : option.push(content.main[i][context.column])
    }

    arr = arr;
    list = list;
  }

  sortFilters();
  $: arr, sortFilters()
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined">
        adjust
      </span>
      <p>
        Select
      </p>
    </div>
    <div>
      <span class="material-icons-outlined"> add </span>
    </div>
  </div>
  <select class="selectFilter" on:change={(e) => handleSelect(e)}>
    <option selected disabled hidden value="default" />
    {#each option as res}
      <option value={res}>
        {res}
      </option>
    {/each}
  </select>
</div>
<div class="displayContainer">
  {#each list as res}
    <div class="display">
      <div class="center-column">
        <p>
          {res}
        </p>
      </div>
      <button on:click={() => handleRemove(res)}>
        <span class="material-icons-outlined"> delete </span>
      </button>
    </div>
  {/each}
</div>

<style lang="scss">
</style>
