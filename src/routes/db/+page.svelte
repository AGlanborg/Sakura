<script>
  import filters_scheme from "$lib/schemes/filters.json"
  import Filter from "./Filter.svelte";
  import Content from "./Content.svelte";
  import { db } from "$lib/memory/selected";
  import { goto, afterNavigate  } from "$app/navigation";

  let file = "";
  let filters = filters_scheme;

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
    <div class="filterContianer">
      <Filter content={content} bind:filters={filters} />
    </div>
    <div class="contentContainer">
      <Content content={content} filters={filters} />
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

  .contentContainer {
    height: 100%;
    width: 80vw;
    overflow-y: scroll;
  }
</style>
