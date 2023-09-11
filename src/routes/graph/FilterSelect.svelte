<script lang="ts">
  export let content: string[];
  export let arr: string | number;
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
    },
    months: {
      title: "Month Wise",
      symbol: "calendar_month"
    },
    years: {
      title: "Year Wise",
      symbol: "celebration"
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

    arr = arr;
  }

  sortFilters();
  $: arr, sortFilters();
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined">
        {Object.keys(cosmetic).includes(arr.toString()) ? cosmetic[arr].symbol : "circle"}
      </span>
      <p>
        {Object.keys(cosmetic).includes(arr.toString()) ? cosmetic[arr].title : arr}
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
          {Object.keys(cosmetic).includes(res) ? cosmetic[res].title : res}
        </option>
      {/if}
    {/each}
  </select>
</div>

<style lang="scss">
</style>
