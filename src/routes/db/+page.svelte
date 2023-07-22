<script>
  import { db } from "$lib/memory/selected";
  import { goto, afterNavigate  } from "$app/navigation";

  import Filters from "./Filters.svelte";
  import Content from "./Content.svelte";

  let file = "";
  let fullscreen = false;

  afterNavigate(({from}) => {
    from?.url.pathname ? '' : goto('/')
  }) 

  async function getContent() {
    db.subscribe(async (val) => {
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
    <div class="filterContianer {fullscreen ? 'filterContianerSmall' : ''}">
      <Filters fullscreen={fullscreen} />
    </div>
    <div class="contentContainer">
      <Content bind:fullscreen={fullscreen} content={content} />
    </div>
  </div>
{:catch error}
  <div class="absolute-center">
    <p>{error.message}</p>
  </div>
{/await}

<style lang="scss">
  .filterContianer {
    display: flex;
    flex-direction: row;
    justify-content: left;
    height: 100%;
    width: 20vw;
  }

  .filterContianerSmall {
    transition-delay: 0.3s;
    width: 0;
  }

  .contentContainer {
    height: 100%;
    width: 80vw;
  }
</style>
