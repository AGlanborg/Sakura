<script>
  import "./styles.scss";
  import Header from "./Header.svelte";
  import sakura from "$lib/images/main-icon-64.png";
  import { page } from "$app/stores";
</script>

<div class="sakuraContainer">
  <img src={sakura} alt="sakura" />
</div>

{#if $page.url.pathname !== "/"}
  <Header />
{/if}

<main>
  <slot />
</main>

<style>
  /* Global */
  :global(*) {
    transition: background-color 0.3s, color 0.3s;
  }

  :global(body) {
    margin: 0;
  }

  :global(button) {
    border: none;
    padding: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
  }

  :global(main) {
    position: absolute;
    left: 0;
    top: 0;
  }

  /* Page specific*/
  .sakuraContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    height: 10vh;
    width: 10vh;
  }
</style>
