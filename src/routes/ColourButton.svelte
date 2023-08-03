<script lang="ts">
  import { page } from "$app/stores";
  import { mode } from "$lib/memory/selected";

  function toggleMode() {
    mode.update((val: string) => {
      return val == "dark" ? (val = "light") : (val = "dark");
    });
  }
</script>

<div
  class="colourSchemeContainer {$page.url.pathname !== '/'
    ? 'smallColourContainer'
    : ''}"
>
  <div class="colourScheme {$page.url.pathname !== '/' ? 'smallColour' : ''}">
    <button on:click={toggleMode}>
      <span class="material-icons colour">wb_sunny</span>
    </button>
  </div>
</div>

<style>
  .colourSchemeContainer {
    position: absolute;
    left: 95vw;
    top: 90vh;
    z-index: 2;
  }

  .smallColourContainer {
    top: 92.5vh;
  }

  .colourScheme {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vh;
    height: 10vh;
  }

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    .colour {
      font-size: 40px;
    }

    .smallColour {
      height: 7.5vh;
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    .colour {
      font-size: 25px;
    }

    .smallColour {
      height: 5vh;
      margin-top: 1vh;
    }
  }
</style>
