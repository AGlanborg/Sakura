<script>
  import content_type from "$lib/types";
  import Rows from "./Rows.svelte";
  import Months from "./Months.svelte";

  export let content = content_type;
  export let filters;
</script>

<div class="rowsContainer">
  <div class="tableButtonContainer">
    <button class="tableButton">
      <h2>Data</h2>
    </button>
    <div class="tableOptionsContainer">
      <button>
        <h3>Download</h3>
        <span class="material-icons data_fullscreen"> download </span>
      </button>
    </div>
  </div>
  <div class="rows">
    <Rows {content} {filters} />
  </div>
</div>
<div class="monthsContainer">
  <div class="tableButtonContainer">
    <button class="tableButton">
      <h2>Months</h2>
    </button>
  </div>
  <div class="months">
    <Months {content} {filters} />
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
    left: 0;
  }

  .rows,
  .months {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin: 1.5% 2.5%;
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

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    .rowsContainer {
      height: 68vh;
      width: 74vw;
    }

    .monthsContainer {
      height: 46vh;
    }

    .rows {
      height: 56vh;
      width: 71.5vw;
    }

    .months {
      height: 34vh;
      width: 71.5vw;
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    .rowsContainer {
      height: 68vh;
      width: 77vw;
    }

    .monthsContainer {
      height: 46vh;
    }

    .rows {
      height: 56vh;
      width: 74vw;
    }

    .months {
      height: 34vh;
      width: 74vw;
    }
  }
</style>
