<script>
  import "$lib/css/styles.scss";
  import "$lib/css/unique.scss";

  import Header from "./Header.svelte";
  import ColourButton from "./ColourButton.svelte";

  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { db, mode } from "$lib/memory/selected";

  let img = "100";
  let title = "";

  onMount(() => {
    db.update(() => "");

    db.subscribe((val) => {
      img = val.slice(-1)
      title = val.slice(0, -1)
    });
  });

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

<div class="headerContainer {$page.url.pathname !== '/' ? 'shown' : ''}">
  <Header bind:img bind:title />
</div>

<ColourButton />

<div class="mainContainer">
  <main class={$page.url.pathname == '/' ? 'home' : 'else'}>
    <slot />
  </main>
</div>

<style>
  @import "material-icons/iconfont/material-icons.css";

  .headerContainer {
    position: absolute;
    top: -7.5vh;
    left: 0;
  }

  .shown {
    top: 0;
  }

  .home {
    height: 80vh;
  }

  .else {
    height: 85vh;
  }
</style>
