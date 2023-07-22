<script>
  import Database from "./Database.svelte";
  import Newdatabase from "./NewDatabase.svelte";

  async function getDatabases() {
    const res = await fetch("api/db");

    return await res.json();
  }
</script>

{#await getDatabases()}
  <div class="fillBody center-absolute">
    <p>Fetching data...</p>
  </div>
{:then dbs}
  <div class={dbs.length < 4 ? "fillBody center-absolute" : ""}>
    {#each [...Array(Math.ceil(dbs.length / 4)).keys()] as row}
      <div class="databaseContainer">
        {#if dbs.length < Number(row) * 4 + 4}
          {#each dbs.slice(Number(row) * 4) as db}
            <Database img={db.slice(-1)} title={db.slice(0, -1)} />
          {/each}
          {#if dbs.length % 4 != 0}
            <Newdatabase />
          {/if}
        {:else}
          {#each dbs.slice(Number(row) * 4, Number(row) * 4 + 4) as db}
            <Database img={db.slice(-1)} title={db.slice(0, -1)} />
          {/each}
        {/if}
      </div>
    {/each}
    {#if dbs.length % 4 == 0}
      <div class="databaseContainer">
        <Newdatabase />
      </div>
    {/if}
  </div>
{:catch error}
  <div class="absolute-center">
    <p>{error.message}</p>
  </div>
{/await}

<style lang="scss">
  .databaseContainer {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
</style>
