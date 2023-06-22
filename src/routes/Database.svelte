<script>
  export let row = 100;
  export let txt = '';

  import "./unique.scss";
  import MediaQuery from "./MediaQuery.svelte";
  import non128 from "$lib/images/non-128.png"
  import non64 from "$lib/images/non-64.png"
  import a128 from "$lib/images/1-128.png";
  import a64 from "$lib/images/1-64.png";
  import b128 from "$lib/images/2-128.png";
  import b64 from "$lib/images/2-64.png";
  import c128 from "$lib/images/3-128.png";
  import c64 from "$lib/images/3-64.png";
  import d128 from "$lib/images/4-128.png";
  import d64 from "$lib/images/4-64.png";
  import e128 from "$lib/images/5-128.png";
  import e64 from "$lib/images/5-64.png";
  import f128 from "$lib/images/6-128.png";
  import f64 from "$lib/images/6-64.png";

  let pic64 = [a64, b64, c64, d64, e64, f64]
  let pic128 = [a128, b128, c128, d128, e128, f128]
</script>

<div class="dbContainer">
  <div class="db">
    <h2>
      {txt}
    </h2>
    <div class="center-row">
      <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
            <img src={row == 100 ? non128 : pic128[row]} alt="Cherry Blossom Icon" />
        {/if}
      </MediaQuery>
      <MediaQuery query="(max-width: 1280px)" let:matches>
        {#if matches}
          <img src={row == 100 ? non64 :pic64[row]} alt="Cherry Blossom Icon" />
        {/if}
      </MediaQuery>
    </div>
    <span class="material-icons">delete</span>
  </div>
</div>

<style lang="scss">
  @import "material-icons/iconfont/material-icons.css";

  h2 {
    user-select: none;
    margin: 15% 0 0;
    font-size: 35px;
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
