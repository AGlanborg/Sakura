<script>
  import content_type from "$lib/types";
  import Rows from "./Rows.svelte";

  export let content = content_type;
  export let fullscreen = false;
  export let saljare = [];
  export let kopare = [];
  export let arbetstyp = [];
</script>

<div class="statsContainer" />
<div class="rowsContainer {fullscreen ? 'rowContainerFull' : ''}">
  <div class="dataButtonContainer {fullscreen ? 'dataButtonContainerFull' : ''}">
    <button class="dataButton" on:click={() => fullscreen = !fullscreen}>
      <h2>Data</h2>
      <span class="material-icons data_fullscreen"> {fullscreen ? 'fullscreen_exit' : 'fullscreen'} </span>
    </button>
    <div class="dataOptionsContainer">
      <button>
        <h3>
          Download
        </h3>
        <span class="material-icons data_fullscreen"> download </span>
      </button>
    </div>
  </div>
  <div class="rows {fullscreen ? 'rowFull' : ''}">
    <Rows content={content} saljare={saljare} kopare={kopare} arbetstyp={arbetstyp} />
  </div>
</div>

<style lang="scss">
  /* Static */
  h2 {
    display: inline-block;
    font-size: 30px;
    font-weight: 100;
  }

  h3 {
    font-weight: 100;
  }

  .statsContainer {
    height: 0;
    width: 90%;
    background-color: black;
  }

  .dataButton {
    width: 100px;
    height: 50px;
  }

  .data_fullscreen {
    margin: 5px 0 0 5px;
  }

  /* Default */
  .rowsContainer {
    position: absolute;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin: 4vh 2.5vw;
    padding: 0 1vh;
    width: 74vw;
    height: 77vh;
    z-index: 1;
    left: 20vw;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1.5vh 0 0 3vw;
  }

  .dataOptionsContainer {
    padding-right: 2vw;

    button {
      margin: 0 1vw;
    }
  }

  /* Fullscreen */
  .rowContainerFull {
    left: 0;
    height: 83vh;
    width: 96vw;
    margin: 1vh 1vw;
  }

  .rowFull {
    height: 75vh;
    width: 95vw;
    margin: 0.5vh 0.5vw;
  }

  .dataButtonContainerFull {
    margin: 1vh 3.5vw;
  }
</style>
