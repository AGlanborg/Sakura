<script lang="ts">
  export let content: string[];
  export let arr: string;
  export let labels: string[] = [];

  let option: string[] = [];

  let cosmetic = {
    tillverkare: {
      title: "Tillverkare",
      symbol: "build_circle"
    },
    typ: {
      title: "Typ",
      symbol: "label"
    },
    totalt: {
      title: "Totalt inkl. moms & oh",
      symbol: "paid"
    },
    sek: {
      title: "Totalt, SEK, inkl. moms & oh",
      symbol: "functions"
    }
  }

  function handleSelect(event: any) {
    arr = event.target.value;

    labels = [];

    event.target.value = "default";

    sortFilters();
  }

  function sortFilters() {
    option = [];

    for (let i = 0; i < content.length; i += 1) {
      arr == content[i] ? "" : option.push(content[i]);
    }

    if (arr.length == 0) {
      arr = "bar";
      sortFilters();
    }

    arr = arr;
  }

  sortFilters();
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined">
        {cosmetic[arr].symbol}
      </span>
      <p>
        {cosmetic[arr].title}
      </p>
    </div>
    <div>
      <span class="material-icons-outlined"> arrow_drop_down </span>
    </div>
  </div>
  <select class="selectFilter" on:change={(e) => handleSelect(e)}>
    <option selected disabled hidden value="default" />
    {#each option as res}
      {#if res != arr}
        <option value={res}>
          {cosmetic[res].title}
        </option>
      {/if}
    {/each}
  </select>
</div>

<style lang="scss">
</style>
