<script lang="ts">
  import CreateSingle from "./CreateSingle.svelte";
  import CreateMutiple from "./CreateMutiple.svelte";
  import { db } from "$lib/memory/selected";

  let single: number = 1;
  let file: string;

  async function getContent() {
    db.subscribe(async (val) => {
      file = val;
    });
  }

  getContent();
</script>

<div class="formatSelect">
  <button
    class="formatButton {single ? 'formatHighlight' : ''}"
    on:click={() => (single = 1)}
  >
    <span class="material-icons-outlined">folder</span>
  </button>
  <button
    class="formatButton {single ? '' : 'formatHighlight'}"
    on:click={() => (single = 0)}
  >
    <span class="material-icons-outlined">folder_copy</span>
  </button>
</div>
{#if single}
  <div class="mutipleTitleContainer">
    <h1>Create Entery</h1>
  </div>
  <CreateSingle />
{:else}
  <div class="mutipleTitleContainer">
    <h1>Create Mutiple Enteries</h1>
    <abbr title="Enter one value per row. ">
      <span class="material-icons-outlined">info</span>
    </abbr>
  </div>
  <CreateMutiple />
{/if}

<style lang="scss">
  .formatSelect {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 3vh;
    left: 1vw;
    height: 50px;
    width: 100px;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
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

  .mutipleTitleContainer {
    margin: 3.5vh 7vw 1vh;
    width: 20vw;

    h1 {
      display: inline-block;
      font-weight: 100;
      margin: 0 5px;
    }
  }
</style>
