<script>
  import Styles from "./Styles.svelte";
  import Header from "./Header.svelte";
</script>

<Styles />
<Header />

<solt />

<style>
  /* General */
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
</style>
