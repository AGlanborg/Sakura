<script>
  import content_type from "$lib/types";
  import SortCompany from "./SortCompany.svelte";

  export let fullscreen = false;
  export let content = content_type;
  export let saljare = [];
  export let kopare = [];
</script>

<div class="filter {fullscreen ? 'filterSmall' : ''}">
  <h2>Filters</h2>
  <SortCompany content={content} bind:arr={saljare} context={{column: "saljare", title: "Säljare"}} />
  <SortCompany content={content} bind:arr={kopare} context={{column: "kopare", title: "Köpare"}} />
</div>

<style lang="scss">
  h2 {
    display: inline-block;
    margin: 30px;
    font-size: 30px;
    font-weight: 100;
  }

  .filter {
    position: fixed;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 4vh 0;
    height: 77vh;
    width: 20vw;
  }

  .filterSmall {
    box-shadow: none;
  }
</style>
