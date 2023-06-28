<script>
  import "$lib/css/styles.scss";
  import Header from "./Header.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { mode } from "$lib/memory/selected";

  onMount(() => {
    mode.subscribe((val) => {
      if (val == "dark") {
        window.document.body.classList.add("dark");
      } else {
        window.document.body.classList.remove("dark");
      }
    });
  });
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
