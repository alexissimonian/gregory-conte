<script lang="ts">
    import { goto } from "$app/navigation";

    export let page = "contact";
    export let label = "Contactez-moi";
</script>
<button onclick={() => goto(`/${page}`)}>{label}</button>
<style lang="scss">
    button {
        background-color: $yellow-color;
        color: $black-color;
        cursor: pointer;
        border: 1px solid $black-color;
        padding: $button-padding-lg;
        border-radius: $button-border-radius-lg;
        font-weight: $bold-lg;
        text-transform: uppercase;
        font-size: $button-font-size-lg;
        font-family: "Inknut Antiqua", sans-serif;
        text-wrap: nowrap;

        @media screen and (max-width: $breakpoint-xl) {
            font-size: $button-font-size-md;
            padding: $button-padding-md;
        }
    }
</style>
