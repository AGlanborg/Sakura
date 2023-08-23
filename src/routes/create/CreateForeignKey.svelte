<script>
  import { layoutsSingleForeignKeys as layout } from "$lib/schemes/layouts";

  export let column;
  export let file;

  let foreign = new Object();
  let name = column + "_rst";

  layout[column].content.forEach((s) => {
    foreign[s.column] = "";
  });

  if (["kopare", "saljare"].includes(column)) {
    foreign["name"] = 1;
  }

  function handleCheckbox(value, column) {
    foreign["name"] = value;
    name = column;
  }

  async function handleCommit() {
    if (Object.values(foreign).every((val) => val != "" || typeof val == "number")) {
      let commit = {file: file}

      for (let [key, value] of Object.entries(foreign)) {
        key.includes(column)
          ? commit[key.replace(column + "_", "")] = value
          : commit[key] = value
      }

      let res = await fetch(`/api/content/${column}`, {
        method: "POST",
        body: JSON.stringify(commit),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 200) {
        column = ""
        foreign = new Object();
      }
    }
  }
</script>

<div class="createForeignContainer">
  <div class="createForeignKeys">
    <h2>
      {layout[column].title}
    </h2>
    {#each layout[column].content as row}
      <div class="foreignKeyRow">
        <label for={row.column}>
          {row.label}
        </label>
        {#if row.column.includes("rst") || row.column.includes("cop")}
          <div>
            <input
              id={row.column}
              type="text"
              placeholder={row.label + "..."}
              bind:value={foreign[row.column]}
            />
            <button
              class="foreignKeyCheckbox"
              on:click={() =>
                handleCheckbox(row.column.includes("rst") ? 1 : 0, row.column)}
            >
              {#if name == row.column}
                <span class="material-icons-outlined">check</span>
              {/if}
            </button>
          </div>
        {:else}
          <input
            id={row.column}
            type="text"
            placeholder={row.label + "..."}
            bind:value={foreign[row.column]}
          />
        {/if}
      </div>
    {/each}
    <button on:click={() => handleCommit()}>
      Create {["kopare", "saljare"].includes(column)
        ? foreign["name"]
          ? foreign[column + "_rst"]
          : foreign[column + "_cop"]
        : foreign["arbetstyp_arbetstyp"]}
    </button>
    <button on:click={() => (column = "")}>
      <span class="material-icons-outlined deg45">add_circle_outline</span>
    </button>
  </div>
</div>

<style lang="scss">
  .createForeignContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 85vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .createForeignKeys {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 600px;
    width: 600px;
    border-radius: 30px;

    h2 {
      margin: 40px 0 0;
      text-align: center;
    }

    span {
      width: 100%;
      text-align: center;
    }

    & > button:last-child {
      margin-bottom: 10px;
      border-radius: 20px;
    }
  }

  .foreignKeyRow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      margin: 10px 0;
      font-size: 20px;
    }

    input {
      outline-style: solid;
      outline-width: 3px;
      border-radius: 5px;
      font-size: 16px;
      height: 40px;
      width: 200px;
      padding: 0 10px;
    }

    div {
      input {
        width: 159px;
      }

      .foreignKeyCheckbox {
        position: relative;
        display: inline-block;
        border-radius: 5px;
        top: -4px;
        left: 7px;
        height: 30px;
        width: 30px;
        margin: 0 3px;
        padding: 0;

        span {
          position: absolute;
          top: 4px;
          left: 1px;
        }
      }
    }
  }
</style>
