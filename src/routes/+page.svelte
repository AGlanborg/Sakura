<script>
  import Database from "./Database.svelte";
  import Newdatabase from "./NewDatabase.svelte";
  import "$lib/css/unique.scss";

  async function getDatabases() {
    const res = await fetch("api/db");

    return await res.json();
  }
</script>

<div class="homeContainer">
  {#await getDatabases()}
    <p>Fetching data...</p>
  {:then dbs}
    <div class="home {dbs.length < 4 ? 'homeCenter' : ''}">
      {#each [...Array(Math.ceil(dbs.length / 4)).keys()] as row}
        <div class="databaseContainer">
          {#if dbs.length < Number(row) * 4 + 4}
            {#each dbs.slice(Number(row) * 4) as db}
              <Database row={db.slice(-1)} txt={db.slice(0, -1)} />
            {/each}
            {#if dbs.length % 4 != 0}
              <Newdatabase />
            {/if}
          {:else}
            {#each dbs.slice(Number(row) * 4, Number(row) * 4 + 4) as db}
              <Database row={db.slice(-1)} txt={db.slice(0, -1)} />
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
    <p>{error.message}</p>
  {/await}
</div>

<style lang="scss">
  .homeContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .home {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    box-sizing: border-box;
    box-shadow: inset 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
    height: 80vh;
    width: 100vw;
  }

  .homeCenter {
    justify-content: center;
  }

  .databaseContainer {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
</style>
