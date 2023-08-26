<script lang="ts">
  import CreateSingleLayout from "./CreateSingleLayout.svelte";
  import {
    layoutsSingle,
    layoutsSingleExceptions,
  } from "$lib/schemes/layouts";
  import { db } from "$lib/memory/selected";

  let row = 1;
  let file = "";
  let table = new Object;
  let info = new Object();

  layoutsSingle.forEach((s) => {
    info[s.column] = "";
  });

  layoutsSingleExceptions.forEach((s) => {
    info[s.column] = "";
  });

  async function getContent() {
    db.subscribe(async (val: string) => {
      file = val;
    });

    const res = await fetch(`api/content?file=${file}`);

    table = await res.json();
  }

  async function createContent() {
    console.log("commit")
  }
</script>

<div class="mutipleReason">
  <button
    class="formatButton {row ? 'formatHighlight' : ''}"
    on:click={() => (row = 1)}
  >
    <span class="material-icons-outlined">density_medium</span>
  </button>
  <button
    class="formatButton {row ? '' : 'formatHighlight'}"
    on:click={() => (row = 0)}
  >
    <span class="material-icons-outlined deg90">density_medium</span>
  </button>
</div>
<button class="commitCreateButton" on:click={() => createContent()}> Commit </button>
{#await getContent()}
  <div class="fillBody center-absolute">
    <p>
      Loading...
    </p>
  </div>
{:then}
  <CreateSingleLayout bind:info={info} table={table} file={file} getContent={getContent} row={row} />
{/await}

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
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    top: 3vh;
    left: 50vw;
    border-radius: 10px;
  }

  .formatButton {
    border-radius: 10px;
    width: 50px;
    height: 50px;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>
