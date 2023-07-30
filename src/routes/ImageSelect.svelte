<script>
  import MediaQuery from "./MediaQuery.svelte";

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

  export let rep;
  export let options;

  function selectImg(val = 100) {
    rep = val;
    options = 0;
  }
</script>

<MediaQuery query="(min-width: 1601px)" let:matches>
  {#if matches}
    <div class="newImageContainer">
      <div class="newImage">
        <button on:click={() => selectImg(0)}>
          <img src={a64} alt="sakura" />
        </button>
        <button on:click={() => selectImg(1)}>
          <img src={b64} alt="sakura" />
        </button>
        <button on:click={() => selectImg(2)}>
          <img src={c64} alt="sakura" />
        </button>
      </div>
      <div class="newImage">
        <button on:click={() => selectImg(3)}>
          <img src={d64} alt="sakura" />
        </button>
        <button on:click={() => selectImg(4)}>
          <img src={e64} alt="sakura" />
        </button>
        <button on:click={() => selectImg(5)}>
          <img src={f64} alt="sakura" />
        </button>
      </div>
      <div class="newImage">
        <button on:click={() => selectImg(6)}>
          <img src={g64} alt="sakura" />
        </button>
      </div>
      <div class="newImageCloseContainer">
        <button on:click={() => (options = 0)}>
          <span class="material-icons newImageClose"> add_circle </span>
        </button>
      </div>
    </div>
  {/if}
</MediaQuery>
<MediaQuery query="(max-width: 1600px)" let:matches>
  {#if matches}
    <div class="newImageContainer">
      <div class="newImage">
        <button on:click={() => selectImg(0)}>
          <img src={a128} alt="sakura" />
        </button>
        <button on:click={() => selectImg(1)}>
          <img src={b128} alt="sakura" />
        </button>
        <button on:click={() => selectImg(2)}>
          <img src={c128} alt="sakura" />
        </button>
        <button on:click={() => selectImg(3)}>
          <img src={d128} alt="sakura" />
        </button>
      </div>
      <div class="newImage">
        <button on:click={() => selectImg(4)}>
          <img src={e128} alt="sakura" />
        </button>
        <button on:click={() => selectImg(5)}>
          <img src={f128} alt="sakura" />
        </button>
        <button on:click={() => selectImg(6)}>
          <img src={g128} alt="sakura" />
        </button>
      </div>
      <div class="newImageCloseContainer">
        <button on:click={() => (options = 0)}>
          <span class="material-icons newImageClose"> add_circle </span>
        </button>
      </div>
    </div>
  {/if}
</MediaQuery>

<style lang="scss">
    .newImageClose {
      font-size: 40px;
      transform: rotate(45deg);
    }

    .newImageCloseContainer {
      display: flex;
      justify-content: center;
      width: 100%;
    }

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    .newImageContainer {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      z-index: 2;
      background-color: rgb(0, 0, 0, 0.8);
      height: 32.5vh;
      width: 12.5vw;
      border-radius: 22px;
    }

    .newImage {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      padding: 5px 0 5px;
    }

    .newImageCloseContainer {
      margin: 5px 0 0;
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    .newImageContainer {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 2;
      background-color: rgb(0, 0, 0, 0.6);
      top: -20vh;
      left: 0;
      height: 203.5%;
      width: 100%;
    }

    .newImage {
      display: flex;
      justify-content: space-around;
      width: 60%;
      padding: 30px 20%;
    }
  }
</style>
