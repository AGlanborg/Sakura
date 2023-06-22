<script>
  import "$lib/css/styles.scss";
  import Header from "./Header.svelte";
  import sakura from "$lib/images/main-icon-64.png";
  import { page } from "$app/stores";
</script>

{#if $page.url.pathname !== "/"}
  <Header />
{/if}

<main>
  <slot />
</main>

<style>
  @import "material-icons/iconfont/material-icons.css";
</style>
