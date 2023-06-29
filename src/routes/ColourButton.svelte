<script>
  import { page } from "$app/stores";
  import { mode } from "$lib/memory/selected";

  function toggleMode() {
    mode.update((val) => {
      console.log(val);
      return val == "dark" ? (val = "light") : (val = "dark");
    });
  }
</script>

<div class="colourSchemeContainer {$page.url.pathname !== '/' ? 'smallColourContainer' : ''}">
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

  .smallColour {
    height: 7.5vh;
  }

  .colour {
    font-size: 40px;
  }
</style>
