<script lang="ts">
  import graphfilters_scheme from "$lib/schemes/filters/graphfilters";
  import GraphFilter from "./GraphFilter.svelte";
  import Canvas from "./Canvas.svelte";
  import { db } from "$lib/memory/selected";
  import { goto, afterNavigate } from "$app/navigation";
  import type { type_graphfilters } from "$lib/types/index";

  let file: string = "";
  let filters: type_graphfilters = graphfilters_scheme;
  let minimise: boolean = false;

  // afterNavigate(({ from }) => {
  //   from?.url.pathname ? "" : goto("/");
  // });

  async function getContent() {
    db.subscribe(async (val: string) => {
      file = val;
    });

    const res = await fetch(`api/content?file=${file}`);

    return await res.json();
  }
</script>

{#await getContent()}
  <div class="fillBody center-absolute">
    <p>Fetching data...</p>
  </div>
{:then content}
  <div class="fillBody center-row">
    <div class="filterContianer {minimise ? 'filterMinimise' : ''}">
      <GraphFilter {content} bind:filters bind:minimise />
    </div>
    <div class="contentContainer {minimise ? 'contentMinimise' : ''}">
      <Canvas {content} {filters} />
    </div>
  </div>
{:catch error}
  <div class="absolute-center">
    <p>{error.message}</p>
  </div>
{/await}

<style lang="scss">
  .filterContianer {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: left;
    height: 100%;
    left: 0;
  }

  .contentContainer {
    position: relative;
    height: 100%;
    left: 0;
    transition: 0.175s;
  }

  /* Desktop */
  @media only screen and (min-width: 1601px) {
    .filterContianer {
      width: 20vw;
    }

    .filterMinimise {
      left: -18vw;
    }

    .contentContainer {
      width: 80vw;
    }

    .contentMinimise {
      width: 600vw;
      left: 0vw;
    }
  }

  /* Laptop */
  @media only screen and (max-width: 1600px) {
    .filterContianer {
      display: flex;
      width: 17.5vw;
    }

    .filterMinimise {
      left: -15vw;
    }

    .contentContainer {
      width: 82.5vw;
    }

    .contentMinimise {
      width: 600vw;
      left: 0vw;
    }
  }
</style>
