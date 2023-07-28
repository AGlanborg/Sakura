<script>
  import "$lib/css/filters.scss"

  export let arr = [];

  let searchValue = ""

  function handleSubmit() {
    if (!searchValue.match(/^ *$/)) {
      arr.includes(searchValue) ? "" : arr.push(searchValue);

      searchValue = ""

      arr = arr
    }
  }

  function handleRemove(val) {
    arr = arr.filter(e => e != val)
  }

  function onKeyDown(key) {
    if (key.keyCode == 13) {
      handleSubmit()
    }
  }
</script>

<div class="sortContainer row">
  <input type="month" lang="sv" placeholder="MM-YYYY" bind:value={searchValue}>
  <button class="search_button" on:click={() => handleSubmit()}>
    <span class="material-icons-outlined"> add </span>
  </button>
</div>
<div class="displayContainer">
  {#each arr as res}
    <div class="display">
      <div class="center-column">
        <p>
          {res}
        </p>
      </div>
      <button on:click={() => handleRemove(res)}>
        <span class="material-icons"> delete </span>
      </button>
    </div>
  {/each}
</div>
<svelte:window on:keydown={onKeyDown} />

<style lang="scss">
</style>