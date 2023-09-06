<script lang="ts">
  import type { type_content, type_graphfilters } from "$lib/types/index";

  export let content: type_content;
  export let filters: type_graphfilters;

  let canvas: HTMLCanvasElement;
</script>

<canvas bind:this={canvas} class="fillBody" />

<style>

</style>