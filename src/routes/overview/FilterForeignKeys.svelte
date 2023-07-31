<script>
  import "$lib/css/filters.scss"
  import content_type from "$lib/types";

  export let content = content_type;
  export let arr = [];
  export let context = {
    column: "",
    title: "",
  };

  let option = [];
  let list = [];

  function handleSelect(event) {
    arr.includes(Number(event.target.value)) ? "" : arr.push(Number(event.target.value));

    event.target.value = "default";

    sortFilters()
  }

  function handleRemove(id) {
    arr = arr.filter(val => val != id)

    sortFilters()
  }

  function sortFilters() {
    option = []
    list = []

    content[context.column].forEach(obj => {
      arr.includes(obj[context.column + "_id"])
        ? list.push(obj)
        : option.push(obj)
    });

    arr = arr
  }

  sortFilters()
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined"> {context.column == "saljare" ? "sell" : context.column == "kopare" ? "work_outlined" : "folder"} </span>
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
        {context.column == "arbetstyp" ? res.arbetstyp : res.name ? res.rst : res.copernicus}
      </option>
    {/each}
  </select>
</div>
<div class="displayContainer">
  {#each list as res}
    <div class="display">
      <div class="center-column">
        <p>
          {context.column == "arbetstyp" ? res.arbetstyp : res.name ? res.rst : res.copernicus}
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
