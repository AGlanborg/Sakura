<script lang="ts">
  export let arr: string[];

  let searchValue = "";

  function handleSubmit() {
    if (!searchValue.match(/^ *$/)) {
      arr.includes(searchValue) ? "" : arr.push(searchValue);

      searchValue = "";

      arr = arr;
    }
  }

  function handleRemove(val: string) {
    arr = arr.filter((e: string) => e != val);
  }

  function onKeyDown(key: any) {
    if (key.keyCode == 13) {
      handleSubmit();
    }
  }
</script>

<div class="sortContainer row">
  <input
    class="input-month"
    type="month"
    lang="sv"
    placeholder="YYYY-MM"
    bind:value={searchValue}
  />
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
        <span class="material-icons-outlined"> delete </span>
      </button>
    </div>
  {/each}
</div>
<svelte:window on:keydown={onKeyDown} />

<style lang="scss">
</style>
