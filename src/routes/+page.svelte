<script>
  async function getDatabases() {
    const res = await fetch('api/db');
    return await res.json()
  }
</script>

<div class="homeContainer">
  <div class="home">
    {#await getDatabases()}
      <p>Fetching databases...</p>
    {:then dbs}
      {#each [...Array(Math.ceil(dbs.length/4)).keys()] as row}
        {#if dbs.length < Number(row) * 4 + 4}
          {#each dbs.slice(Number(row) * 4) as db}
            <p>{db}</p>
          {/each}
        {:else}
          {#each dbs.slice(Number(row) * 4, Number(row) * 4 + 4) as db}
            <p>{db}</p>
          {/each}
        {/if}
      {/each}
    {:catch error}
      <p>{error.message}</p>
    {/await}
  </div>
</div>

<style lang="scss">
  @use 'colors';

  .homeContainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-width: 3px;
    border-top-style: solid;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    height: 80vh;
    width: 100vw;
  }

  /* Light-mode colors */
  body {
    .home {
      border-top-color: colors.$default-color;
      border-bottom-color: colors.$default-color;
    }
  }

  /* Dark-mode colors*/
  body.dark {
    .home {
      border-top-color: colors.$inverted-color;
      border-bottom-color: colors.$inverted-color;
    }
  }
</style>
