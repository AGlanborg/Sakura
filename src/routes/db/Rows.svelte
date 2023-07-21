<script>
  import "$lib/css/form.scss";
  import raw from "$lib/schemes/raw.json";

  let sizes = ["Short", "Width", "Long", "Extra"];
</script>

<div class="tableRow">
  {#each raw as column}
    <div class="tableColumn {'table-' + column.size}">
      <button>
        <p>{column.name}</p>
        <span class="material-icons">arrow_drop_up</span>
      </button>
    </div>
  {/each}
</div>

<style lang="scss">
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 55px;
    padding: 0 10px;
    font-size: 18px;

    p {
      margin: 0;
      display: inline-block;
    }
  }

  .tableRow {
    display: flex;
    flex-direction: row;
    border: solid 1px rgb(0, 0, 0);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 55px;
    flex-grow: 3;
    margin-right: 15px;
  }

  .tableColumn {
    display: flex;
    align-items: center;
    border-right-style: solid;
    border-right-color: rgb(0, 0, 0);
    border-right-width: 1px;
  }

  .tableColumn:last-child {
    border-right: none;
  }

  .table-default {
    width: 125px;

    button {
      width: 125px;
    }
  }

  .table-short {
    width: 75px;

    button {
      width: 75px;
    }
  }

  .table-long {
    width: 175px;

    button {
      width: 175px;
    }
  }

  .table-extra {
    width: 225px;

    button {
      width: 225px;
    }
  }

  .drop_down {
    transform: rotate(180deg);
  }
</style>
