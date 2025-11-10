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
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-color: $black-color;
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: $breakpoint-xl) {
      font-size: $button-font-size-md;
      padding: $button-padding-md;
    }
  }
</style>
