<script lang="ts">
  import { layoutsMultiple } from "$lib/schemes/layouts";
  import seperate from "$lib/modules/create/seperate/mutiple";

  let info = {};
  let reason = "";
  let failed = [];
  let succeed = "";

  layoutsMultiple.forEach((s: { column: string }) => {
    info[s.column] = "";
  });

  async function handleSubmit() {
    const dummy = new Object();

    Object.assign(dummy, info);

    const res = await seperate(dummy);

    res.code > 0 ? handleSuccess() : handleError(res);
  }

  function handleError(res) {
    failed = res.object.failed;
    reason = res.reason;
  }

  function handleSuccess() {
    succeed = "All new rows have been created";

    layoutsMultiple.forEach((s: { column: string }) => {
      info[s.column] = "";
    });
  }

  function handleChange(column) {
    if (failed.includes(column.column)) {
      failed.splice(failed.indexOf(column, 1));
      failed = failed;

      if (!failed.length) {
        reason = "";
      }
    }

    succeed = "";
  }
</script>

{#if reason}
  <div class="mutipleReason">
    <h3 class="failMessage">
      <span class="material-icons">warning_amber</span>
      {reason}
    </h3>
  </div>
{/if}
{#if succeed}
  <div class="mutipleReason">
    <h3 class="successMessage">
      {succeed}
    </h3>
  </div>
{/if}
<button class="commitCreateButton" on:click={() => handleSubmit()}>
  Commit
</button>
<div class="mutipleContainer">
  {#each layoutsMultiple as column}
    <div>
      <h2>
        {column.category}
        <br />
        {column.title}
      </h2>
      <textarea
        class="mutipleTextarea {failed.includes(column.column)
          ? 'failedTextarea'
          : ''}"
        on:change={() => handleChange(column.column)}
        bind:value={info[column.column]}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .commitCreateButton {
    position: absolute;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 25px;
    top: 3vh;
    right: 2.5vw;
    height: 50px;
    width: 200px;
  }

  .mutipleReason {
    position: absolute;
    top: 3vh;
    left: 50vw;
    height: 0;
    width: 0;

    .successMessage,
    .failMessage {
      position: relative;
      text-align: center;
      font-size: 25px;
      font-weight: 100;
      width: 30vw;
      top: 0.5vw;
      left: -15vw;
      margin: 0;
    }

    .successMessage {
      color: rgb(50, 200, 50);
    }

    .failMessage {
      color: rgb(200, 50, 50);

      .material-icons {
        position: relative;
        font-size: 30px;
        top: 7px;
        color: rgb(200, 50, 50);
      }
    }
  }

  .mutipleContainer {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    height: 80vh;
    width: 94vw;
    padding: 1vh 2vw;

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-right: 25px;
    }

    h2 {
      text-align: center;
      font-size: 22.5px;
      line-height: 30px;
      width: 225px;
    }

    .mutipleTextarea {
      outline-style: solid;
      outline-width: 3px;
      border: none;
      border-radius: 10px;
      height: 70vh;
      padding: 5px 10px;

      &:focus {
        outline-color: rgb(50, 50, 200);
      }
    }

    .failedTextarea {
      outline-color: rgb(200, 50, 50);
    }
  }
</style>
