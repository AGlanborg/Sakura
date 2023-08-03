<script lang="ts">
  import Rows from "./Rows.svelte";
  import Months from "./Months.svelte";
  import type { type_content, type_filters } from "$lib/types/index";

  export let content: type_content;
  export let filters: type_filters;
  export let minimise: boolean;
</script>

<div class="rowsContainer {minimise ? 'rowsMinimise' : ''}">
  <div class="tableButtonContainer">
    <button class="tableButton">
      <h2>Data</h2>
    </button>
    <div class="tableOptionsContainer">
      <button>
        <h3 class="selectNone">Download</h3>
        <span class="material-icons data_download"> download </span>
      </button>
    </div>
  </div>
  <div class="rows">
    <Rows {content} {filters} />
  </div>
</div>
<div class="monthsContainer {minimise ? 'rowsMinimise' : ''}">
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
    height: 50px;
  }

  .data_download {
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
    margin: 0 2.5%;
  }

  .tableButtonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
      width: 74vw;
    }

    .rows {
      height: 64vh;
      width: 71.5vw;
    }

    .months {
      height: 42.5vh;
      width: 71.5vw;
    }

    .tableButtonContainer {
      margin: 0 0 0 2.5vw;
    }

    .rowsMinimise {
      width: 92vw;
      margin: 4vh 1.2vw;

      .rows,
      .months {
        width: 89vw;
      }
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    h2,
    h3 {
      margin: 0;
    }

    .rowsContainer {
      height: 68vh;
      width: 77vw;
    }

    .monthsContainer {
      height: 46vh;
      width: 77vw;
    }

    .rows {
      height: 60vh;
      width: 74vw;
    }

    .months {
      height: 39vh;
      width: 74vw;
    }

    .tableButtonContainer {
      margin: 0 0 0 3vw;
    }

    .tableOptionsContainer {
      height: 50px;

      button {
        height: 50px;
      }
    }

    .rowsMinimise {
      width: 92vw;

      .rows,
      .months {
        width: 89vw;
      }
    }
  }
</style>
