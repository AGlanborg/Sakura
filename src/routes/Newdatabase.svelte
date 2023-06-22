<script>
  import MediaQuery from "./MediaQuery.svelte";

  import "$lib/css/unique.scss";
  import "$lib/css/form.scss";

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

  let pic64 = [a64, b64, c64, d64, e64, f64];
  let pic128 = [a128, b128, c128, d128, e128, f128];

  let phase = 0;
  let title = "";
  let rep = 100;
  let options = 0;
</script>

{#if options}
  <div />
{/if}

<div class="dbContainer">
  <div class="db">
    {#if phase}
      <div>
        <input type="text" placeholder="Title..." bind:value={title} />
      </div>
      <div class="center-row">
        <button on:click={() => (options = 1)}>
          <MediaQuery query="(min-width: 1281px)" let:matches>
            {#if matches}
              {#if rep == 100}
                <div class="missing128">
                  <span class="material-icons image128"> image </span>
                </div>
              {:else}
                <img src={pic128[rep]} alt="Cherry Blossom Icon" />
              {/if}
              <div class="absolute">
                <span class="material-icons pen128"> edit </span>
              </div>
            {/if}
          </MediaQuery>
          <MediaQuery query="(max-width: 1280px)" let:matches>
            {#if matches}
              {#if rep == 100}
                <div class="missing64">
                  <span class="material-icons image64"> image </span>
                </div>
              {:else}
                <img src={pic64[rep]} alt="Cherry Blossom Icon" />
              {/if}
              <div class="absolute">
                <span class="material-icons pen64"> edit </span>
              </div>
            {/if}
          </MediaQuery>
        </button>
      </div>
      <span class="material-icons"> add_circle </span>
    {:else}
      <div />
      <div class="center-row">
        <button on:click={() => (phase = 1)}>
          <MediaQuery query="(min-width: 1281px)" let:matches>
            {#if matches}
              <span class="material-icons plus128"> add_circle </span>
            {/if}
          </MediaQuery>
          <MediaQuery query="(max-width: 1280px)" let:matches>
            {#if matches}
              <span class="material-icons plus64"> add_circle </span>
            {/if}
          </MediaQuery>
        </button>
      </div>
      <div />
    {/if}
  </div>
</div>

<style lang="scss">
  input[type="text"] {
    font-weight: 800;
    padding: 2.5% 5%;
    margin: 12.5% 0 0;
    font-size: 35px;
    width: 70%;
  }

  input[type="text"]:not(:placeholder-shown) {
    text-align: center;
  }

  span {
    user-select: none;
    color: rgba(0, 0, 0, 0.5);
    font-size: 40px;
    margin-bottom: 10%;
    margin-top: 6.5%;
  }

  img {
    cursor: pointer;
  }

  .plus64,
  .plus128 {
    color: rgba(0, 0, 0, 0.2);
  }

  .plus64 {
    font-size: 64px;
  }

  .plus128 {
    font-size: 128px;
  }

  .missing64,
  .missing128 {
    display: felx;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .missing128 {
    height: 128px;
    width: 128px;
  }

  .missing64 {
    height: 64px;
    width: 64px;
  }

  .image128 {
    margin: 19px 0;
    font-size: 90px;
  }

  .image64 {
    margin: 10px 0;
    font-size: 44px;
  }

  .pen128,
  .pen64 {
    position: relative;
    height: 0;
    width: 0;
  }

  .pen128 {
    font-size: 30px;
    top: -30px;
    left: 108px;
  }

  .pen64 {
    font-size: 20px;
    top: -20px;
    left: 54px;
  }
</style>
