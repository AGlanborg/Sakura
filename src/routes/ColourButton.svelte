<script>
  import { mode } from "$lib/memory/selected";

  function toggleMode() {
    mode.update((val) => {
      console.log(val);
      return val == "dark" ? (val = "light") : (val = "dark");
    });
  }
</script>

<div class="colourSchemeContainer">
  <div class="colourScheme">
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

  .colourScheme {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vh;
    height: 10vh;
  }

  .colour {
    font-size: 40px;
  }
</style>
