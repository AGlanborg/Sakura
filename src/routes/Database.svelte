<script>
  export let row = 1;

  import "./unique.scss";
  import MediaQuery from "./MediaQuery.svelte";
  import first128 from "$lib/images/1-128.png";
  import first64 from "$lib/images/1-64.png";
  import second128 from "$lib/images/2-128.png";
  import second64 from "$lib/images/2-64.png";
  import third128 from "$lib/images/3-128.png";
  import third64 from "$lib/images/3-64.png";
  import forth128 from "$lib/images/4-128.png";
  import forth64 from "$lib/images/4-64.png";
</script>

<div class="dbContainer">
  <div class="db">
    <h2>
      <slot />
    </h2>
    <div class="center-row">
      {#if row % 4 == 0}
        <MediaQuery query="(min-width: 1281px)" let:matches>
          {#if matches}
            <img src={first128} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1280px)" let:matches>
          {#if matches}
            <img src={first64} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
      {:else if row % 4 == 1}
        <MediaQuery query="(min-width: 1281px)" let:matches>
          {#if matches}
            <img src={second128} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1280px)" let:matches>
          {#if matches}
            <img src={second64} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
      {:else if row % 4 == 2}
        <MediaQuery query="(min-width: 1281px)" let:matches>
          {#if matches}
            <img src={third128} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1280px)" let:matches>
          {#if matches}
            <img src={third64} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
      {:else if row % 4 == 3}
        <MediaQuery query="(min-width: 1281px)" let:matches>
          {#if matches}
            <img src={forth128} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1280px)" let:matches>
          {#if matches}
            <img src={forth64} alt="Cherry Blossom Icon" />
          {/if}
        </MediaQuery>
      {/if}
    </div>
    <span class="material-icons">delete</span>
  </div>
</div>

<style lang="scss">
  @import "material-icons/iconfont/material-icons.css";

  h2 {
    user-select: none;
    margin: 15% 0 0;
    font-size: 30px;
  }

  img {
    user-select: none;
  }

  span {
    user-select: none;
    color: rgba(0, 0, 0, 0.05);
    font-size: 40px;
    margin-bottom: 10%;
  }
</style>
