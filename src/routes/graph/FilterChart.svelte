<script lang="ts">
  export let arr: string;

  let content = ["bar", "line", "polarArea"]
  let option: string[] = [];

  function handleSelect(event: any) {
    arr = event.target.value

    event.target.value = "default";

    sortFilters();
  }

  function sortFilters() {
    option = [];

    for (let i = 0; i < content.length; i += 1) {
      arr == content[i]
        ? ""
        : option.push(content[i]);
    }

    if (arr.length == 0) {
      arr = "bar"
      sortFilters()
    }

    arr = arr;
  }

  sortFilters();
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined">
        {
          arr == "bar"
            ? "bar_chart"
            : arr == "doughnut" || arr == "pie"
            ? "pie_chart"
            : arr == "line"
            ? "show_chart"
            : arr == "polarArea"
            ? "area_chart"
            : "insert_chart_outlined"
        }
      </span>
      <p>
        {
          arr == "bar"
            ? "Bar"
            : arr == "doughnut"
            ? "Doughnut"
            : arr == "pie"
            ? "Pie"
            : arr == "line"
            ? "Line"
            : arr == "polarArea"
            ? "Polar Area"
            : arr
        }
      </p>
    </div>
    <div>
      <span class="material-icons-outlined"> arrow_drop_down </span>
    </div>
  </div>
  <select class="selectFilter" on:change={(e) => handleSelect(e)}>
    <option selected disabled hidden value="default" />
    {#each option as res}
      {#if res != arr }
        <option value={res}>
          {
            res == "bar"
              ? "Bar"
              : res == "doughnut"
              ? "Doughnut"
              : res == "pie"
              ? "Pie"
              : res == "line"
              ? "Line"
              : res == "polarArea"
              ? "Polar Area"
              : res
          }
        </option>
      {/if}
    {/each}
  </select>
</div>

<style lang="scss">
</style>
