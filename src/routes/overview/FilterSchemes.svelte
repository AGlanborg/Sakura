<script lang="ts">
  import * as schemes from "$lib/schemes/filters";

  export let arr: string[];
  export let context: { column: "typ" | "valuta" };

  let option: string[] = [];
  let list: string[] = [];

  function handleSelect(event: any) {
    arr.includes(event.target.value) ? "" : arr.push(event.target.value);

    event.target.value = "default";

    sortFilters();
  }

  function handleRemove(val: string) {
    arr = arr.filter((e: string) => e != val);

    sortFilters();
  }

  function sortFilters() {
    option = [];
    list = [];

    schemes[context.column].values.forEach((val: string) => {
      arr.includes(val) ? list.push(val) : option.push(val);
    });

    arr = arr;
  }

  sortFilters();
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined">
        {schemes[context.column].symbol}
      </span>
      <p>
        {schemes[context.column].title}
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
