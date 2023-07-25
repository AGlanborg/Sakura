<script>
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

  function sortFilters() {
    option = []
    list = []

    content[context.column].forEach(obj => {
      arr.includes(obj[context.column + "_id"])
        ? list.push(obj)
        : option.push(obj)
    });

    console.log("arr: ", arr)
    console.log("option: ", option)
    console.log("list: ", list)
  }

  sortFilters()
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined"> sell </span>
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
        {res.name ? res.rst : res.copernicus}
      </option>
    {/each}
  </select>
</div>
<div class="displayContainer">
  {#each list as res}
    {res.name ? res.rst : res.copernicus}
  {/each}
</div>

<style lang="scss">
  select {
    position: relative;
    cursor: pointer;
    color: rgba(0, 0, 0, 0);
    font-size: 20px;
    height: 51px;
    width: 13vw;
    margin: 0 2.5vw;
    padding: 0 1.5vw;
  }

  .ghostContainer {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    font-size: 20px;
    height: 50px;
    width: 10vw;
    margin: 0 2.5vw;
    padding: 0 1.5vw;
    border-color: rgb(0, 0, 0);

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      margin-left: 10px;
    }
  }

  .sortContainer {
    max-height: 50px;
  }

  .displayContainer {
    height: 50px;
    width: 12vw;
    margin: 1px 3vw 15px;
    background-color: red;
  }
</style>
