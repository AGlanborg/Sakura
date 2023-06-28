<script>
  import { onMount } from "svelte";
  import { db, mode } from "$lib/memory/selected";
  import { goto } from "$app/navigation";

  let dbval = "";

  onMount(() => {
    db.subscribe((val) => {
      if (!val) {
        goto("/")
      }

      dbval = val
    });
  });
</script>

{dbval}

<style></style>
