<script>
  import '$lib/css/unique.scss'
  import { page } from "$app/stores";
  import { mode } from "$lib/memory/selected";
  import { goto } from '$app/navigation';

  function toggleMode() {
    mode.update((val) => {
      console.log(val)
      return val == "dark" ? val = "light" : val = "dark"
    })
  }
</script>

<header class="default-background">
  <nav>
    <!-- Nav Buttons Container -->
    <div>
      <div
        class="navIcon"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
      >
      <button on:click={() => goto("/")}>
        <span class="material-icons"> home </span>
      </button>
      </div>
      <div
        class="navIcon"
        aria-current={$page.url.pathname === "/database" ? "page" : undefined}
      >
        <span class="material-icons"> folder </span>
      </div>
      <div
        class="navIcon"
        aria-current={$page.url.pathname === "/content" ? "page" : undefined}
      >
        <span class="material-icons"> table_rows </span>
      </div>
    </div>

    <!-- Nav Settings Container -->
    <div>
      <div class="navDevide inverted-background" />
      <div class="navIcon">
        <button on:click={toggleMode}>
          <span class="material-icons">wb_sunny</span>
        </button>
      </div>
      <div class="navIcon">
        <span class="material-icons">settings</span>
      </div>
    </div>
  </nav>
</header>

<style>
  header {
    border-right-style: solid;
    border-right-width: 2px;
    min-width: 100px;
    width: 5vw;
    max-width: 5vw;
    height: 100vh;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  nav > div:first-child {
    padding-top: 100px;
  }

  .navIcon {
    display: flex;
    justify-content: center;
  }

  .navIcon {
    margin: 30px 0;
    padding: 15px 0;
  }

  .material-icons {
    user-select: none;
    font-size: 35px;
  }

  .navDevide {
    height: 3px;
    width: 70%;
    margin: 15%;
    border-radius: 5px;
  }

  div[aria-current="page"] {
    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.3);
  }
</style>
