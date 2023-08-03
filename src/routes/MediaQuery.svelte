<script lang="ts">
    import { onMount } from "svelte";

    export let query: any;

    let mql: any;
    let mqlListener: any;
    let wasMounted: boolean = false;
    let matches: boolean = false;

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener(query);
        }
    }

    function addNewListener(query: any) {
        mql = window.matchMedia(query);
        mqlListener = (v: any) => (matches = v.matches);
        mql.addListener(mqlListener);
        matches = mql.matches;
    }

    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeListener(mqlListener);
        }
    }
</script>

<slot {matches} />
