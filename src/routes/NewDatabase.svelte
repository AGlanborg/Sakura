<script>
  import MediaQuery from "./MediaQuery.svelte";
  import ImageSelect from "./ImageSelect.svelte";
  import ErrorWarning from "./ErrorWarning.svelte";

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

  let pic64 = [a64, b64, c64, d64, e64, f64, g64];
  let pic128 = [a128, b128, c128, d128, e128, f128, g128];

  let phase = 0;
  let title = "";
  let rep = 100;
  let options = 0;
  let duplicate = 0;
  let message = new Array();

  async function tryCreate() {
    if (title && rep != 100) {
      let res = await fetch("/api/db", {
        method: "POST",
        body: JSON.stringify(`${title + rep}`),
        headers: {
          "Content-Type": "application/json",
        },
      });

      res = await res.json();

      if (String(res) == "Exists") {
        duplicate = 1;
        message = [
          "You have tried to create duplicate files!",
          "This could have wiped the content of the first database!",
          "Be careful!",
        ];
        return;
      }

      location.reload();
    }
  }
</script>

{#if options}
  <MediaQuery query="(max-width: 1600px)" let:matches>
    {#if matches}
      <ImageSelect bind:rep bind:options />
    {/if}
  </MediaQuery>
{/if}

{#if duplicate}
  <ErrorWarning bind:message bind:duplicate />
{/if}

<div class="dbContainer">
  {#if options}
    <MediaQuery query="(min-width: 1601px)" let:matches>
      {#if matches}
        <ImageSelect bind:rep bind:options />
      {/if}
    </MediaQuery>
  {/if}
  <div class="db">
    {#if phase}
      <div>
        <input type="text" placeholder="Title..." class="database_name" bind:value={title} />
      </div>
      <div class="center-row">
        <button on:click={() => (options = 1)}>
          <MediaQuery query="(min-width: 1601px)" let:matches>
            {#if matches}
              {#if rep == 100}
                <div class="missing128">
                  <span class="material-icons image128"> image </span>
                </div>
              {:else}
                <img src={pic128[rep]} alt="Cherry Blossom Icon" />
              {/if}
            {/if}
          </MediaQuery>
          <MediaQuery query="(max-width: 1600px)" let:matches>
            {#if matches}
              {#if rep == 100}
                <div class="missing64">
                  <span class="material-icons image64"> image </span>
                </div>
              {:else}
                <img src={pic64[rep]} alt="Cherry Blossom Icon" />
              {/if}
            {/if}
          </MediaQuery>
        </button>
      </div>
      <button on:click={() => tryCreate()}>
        <span class="material-icons color-inverted-background">
          add_circle
        </span>
      </button>
    {:else}
      <div />
      <div class="center-row">
        <button on:click={() => (phase = 1)}>
          <MediaQuery query="(min-width: 1601px)" let:matches>
            {#if matches}
              <span class="material-icons plus128"> add_circle </span>
            {/if}
          </MediaQuery>
          <MediaQuery query="(max-width: 1600px)" let:matches>
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
  span {
    user-select: none;
  }

  img {
    cursor: pointer;
  }

  .database_name {
    border-bottom-style: solid;
    border-bottom-width: 3px;
    font-weight: 800;
    padding: 5px 0;
  }

  .database_name:not(:placeholder-shown) {
    text-align: center;
  }

  .missing64,
  .missing128 {
    display: felx;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
  }

  .plus64 {
    font-size: 64px;
  }

  .plus128 {
    font-size: 128px;
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

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    input[type="text"] {
      font-weight: 800;
      padding: 2.5% 5%;
      margin: 12.5% 0 0;
      font-size: 35px;
      width: 50%;
    }

    span {
      font-size: 40px;
      margin-bottom: 10%;
      margin-top: 6.5%;
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    input[type="text"] {
      font-weight: 800;
      padding: 2.5% 5%;
      margin: 7.5% 0 0;
      font-size: 25px;
      width: 50%;
    }

    span {
      font-size: 30px;
      margin-bottom: 5%;
    }
  }
</style>
