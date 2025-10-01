<script lang="ts">
    import { goto } from "$app/navigation";

    export let page = "contact";
    export let label = "Contactez-moi";
</script>
<button onclick={() => goto(`/${page}`)}>{label}</button>
