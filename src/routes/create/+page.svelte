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
  {#if single}
    <CreateSingle />
  {:else}
    <CreateMutiple />
  {/if}
</div>

<style lang="scss">
  .formatSelect {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 2vh;
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
</style>
