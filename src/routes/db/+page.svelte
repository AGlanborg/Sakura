<script>
  import { onMount } from "svelte";
  import { db, mode } from "$lib/memory/selected";
  import { goto } from "$app/navigation";

  let title = "";

  onMount(() => {
    db.subscribe((val) => {
      if (!val) {
        goto("/");
      }

      title = val.slice(0, -1);
    });
  });
</script>

<style></style>
