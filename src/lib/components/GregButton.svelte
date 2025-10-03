<script lang="ts">
    import { goto } from "$app/navigation";

    export let page = "contact";
    export let label = "Contactez-moi";
</script>
<button onclick={() => goto(`/${page}`)}>{label}</button>
<style>
    button {
        background-color: var(--yellow-color);
        cursor: pointer;
        border: 1px solid black;
        padding: 0.2em 1.5em;
        border-radius: 20px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 13px;
        font-family: "Inknut Antiqua", sans-serif;
    }
</style>
