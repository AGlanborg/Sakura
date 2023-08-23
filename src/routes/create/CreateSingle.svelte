<script lang="ts">
  import SingleHorizontal from "./SingleHorizontal.svelte";
  import SingleVertical from "./SingleVertical.svelte";
  import { layoutsMultiple } from "$lib/schemes/layouts";
  import { db } from "$lib/memory/selected";

  let info = new Object;
  let row = 1;
  let file = "";
  let table = new Object;

  layoutsMultiple.forEach((s: { column: string }) => {
    info[s.column] = "";
  });

  async function getContent() {
    db.subscribe(async (val: string) => {
      file = val;
    });

    const res = await fetch(`api/content?file=${file}`);

    table = await res.json();
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
<button class="commitCreateButton" on:click={() => ""}> Commit </button>
{#await getContent()}
  <div class="fillBody center-absolute">
    <p>
      Loading...
    </p>
  </div>
{:then}
  {#if row}
    <SingleHorizontal bind:info={info} table={table} file={file} getContent={getContent} />
  {:else}
    <SingleVertical />
  {/if}
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
