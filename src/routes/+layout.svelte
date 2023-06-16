<script>
  import Header from "./Header.svelte";
</script>

<Header />

<solt />

<style>
  :global(body) {
    background-color: rgb(220, 220, 220);
    color: rgb(0, 0, 0);
    transition: background-color 0.3s;
    margin: 0;
  }
  :global(body.dark-mode) {
    background-color: rgb(60, 60, 60);
    color: rgb(220, 220, 220);
  }
</style>
