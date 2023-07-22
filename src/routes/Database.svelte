<script>
  import { goto } from "$app/navigation";
  import { db } from "$lib/memory/selected";

  import MediaQuery from "./MediaQuery.svelte";

  import non64 from "$lib/images/non-64.png";
  import non128 from "$lib/images/non-128.png";
  import a128 from "$lib/images/0-128.png";
  import a64 from "$lib/images/0-64.png";
  import b128 from "$lib/images/1-128.png";
  import b64 from "$lib/images/1-64.png";
  import c128 from "$lib/images/2-128.png";
  import c64 from "$lib/images/2-64.png";
  import d128 from "$lib/images/3-128.png";
  import d64 from "$lib/images/3-64.png";
  import e128 from "$lib/images/4-128.png";
  import e64 from "$lib/images/4-64.png";
  import f128 from "$lib/images/5-128.png";
  import f64 from "$lib/images/5-64.png";
  import g128 from "$lib/images/6-128.png";
  import g64 from "$lib/images/6-64.png";

  export let img = "100";
  export let title = "";

  let pic64 = [a64, b64, c64, d64, e64, f64, g64];
  let pic128 = [a128, b128, c128, d128, e128, f128, g128];

  function selectDB() {
    db.update(() => title + img)
    goto("/db")
  }
</script>

<div class="dbContainer">
  <button on:click={() => selectDB()}>
    <div class="db">
      <h2>
        {!isNaN(parseFloat(img)) ? title : title + img}
      </h2>
      <div class="center-row">
        <MediaQuery query="(min-width: 1601px)" let:matches>
          {#if matches}
            <img
              src={!isNaN(parseFloat(img)) ? pic128[Number(img)] : non128}
              alt="Cherry Blossom Icon"
            />
          {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1600px)" let:matches>
          {#if matches}
            <img
              src={!isNaN(parseFloat(img)) ? pic64[Number(img)] : non64}
              alt="Cherry Blossom Icon"
            />
          {/if}
        </MediaQuery>
      </div>
      <span class="material-icons">delete</span>
    </div>
  </button>
</div>

<style lang="scss">
  img {
    user-select: none;
  }

  span {
    user-select: none;
    color: rgba(0, 0, 0, 0.05);
  }

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    h2 {
      margin: 15% 0 2.5%;
      font-size: 35px;
    }

    span {
      font-size: 40px;
      margin-bottom: 10%;
      margin-top: 6.5%;
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    h2 {
      margin: 10% 0 2.5%;
      font-size: 25px;
    }

    span {
      font-size: 30px;
      margin-bottom: 5%;
    }
  }
</style>
