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
  }

  sortFilters()
</script>

<div class="sortContainer">
  <div class="ghostContainer">
    <div>
      <span class="material-icons-outlined"> { context.column == "saljare" ? "sell" : "work_outlined"} </span>
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
    <div class="display">
      <div class="center-column">
        <p>
          {res.name ? res.rst : res.copernicus}
        </p>
      </div>
      <button on:click={() => handleRemove(res[context.column + "_id"])}>
        <span class="material-icons"> delete </span>
      </button>
    </div>
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
    width: 12vw;
    margin: 1px 3vw 15px;
  }

  .display {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-style: solid;
    border-top: none;
    border-width: 1px;
    font-size: 20px;
    width: 10vw;
    height: 40px;
    padding: 0 0.5vw 0 1.5vw;

    &:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    p {
      display: inline-block;
      text-align: center;
      margin: 0;
    }

    button {
      height: 40px;
    }
  }

  .material-icons-outlined {
    height: 24px;
    width: 24px;
  }
</style>
