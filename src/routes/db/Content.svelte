<script>
  import content_type from "$lib/types";
  import Rows from "./Rows.svelte";
  import Months from "./Months.svelte";

  export let content = content_type;
  export let filters;
</script>

<div class="rowsContainer">
  <div class="tableButtonContainer ">
    <button class="tableButton">
      <h2>Data</h2>
    </button>
    <div class="tableOptionsContainer">
      <button>
        <h3>
          Download
        </h3>
        <span class="material-icons data_fullscreen"> download </span>
      </button>
    </div>
  </div>
  <div class="rows">
    <Rows content={content} filters={filters} />
  </div>
</div>
<div class="monthsContainer">
  <div class="tableButtonContainer ">
    <button class="tableButton">
      <h2>Months</h2>
    </button>
  </div>
  <div class="months">
    <Months content={content} filters={filters} />
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

  .tableButton {
    width: 100px;
    height: 50px;
  }

  .data_fullscreen {
    margin: 5px 0 0 5px;
  }

  /* Default */
  .rowsContainer,
  .monthsContainer {
    position: relative;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin: 4vh 2.5vw;
    padding: 1vh 0;
    width: 74vw;
    left: 0;
  }

  .rowsContainer {
    height: 62vh;
  }

  .monthsContainer {
    height: 42vh;
  }

  .rows,
  .months {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin: 1.5% 2.5%;
    width: 71.5vw;
  }

  .rows {
    height: 50vh;
  }

  .months {
    height: 30vh;
  }

  .tableButtonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1.5vh 0 0 3vw;
  }

  .tableOptionsContainer {
    padding-right: 2vw;

    button {
      margin: 0 1vw;
    }
  }
</style>
