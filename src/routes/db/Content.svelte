<script>
  export let content = { main: {} };

  import Rows from "./Rows.svelte";

  let fullscreen = false
</script>

<div class="statsContainer" />
<div class="rowsContainer">
  <div class="dataButtonContainer">
    <button class="dataButton" on:click={() => fullscreen = !fullscreen}>
      <h2>Data</h2>
      <span class="material-icons data_fullscreen"> {fullscreen ? 'fullscreen_exit' : 'fullscreen'} </span>
    </button>
  </div>
  <div class="rows">
    <Rows {content} />
  </div>
</div>

<style>
  h2 {
    display: inline-block;
    font-size: 30px;
    font-weight: 100;
  }

  .statsContainer {
    margin: 2.5%;
    height: 0;
    width: 90%;
    background-color: black;
  }

  .rowsContainer {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin: 2.5%;
    height: 90%;
  }

  .rows {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin: 1.5% 2.5%;
    width: 71.5vw;
    height: 65vh;
  }

  .dataButtonContainer {
    padding: 1.5% 0 0 5%;
  }

  .dataButton {
    width: 100px;
    height: 50px;
  }

  .data_fullscreen {
    margin: 5px 0 0 5px;
  }
</style>
