<script lang="ts">
    import { page } from "$app/state";
    import GregButton from "./GregButton.svelte";

    const navItems = [
        { id: "parcours", label: "parcours", url: "/parcours" },
        { id: "spectacles", label: "spectacles de contes", url: "/spectacles" },
        { id: "ateliers", label: "ateliers d’écriture", url: "/ateliers" },
    ];
</script>

<nav>
    <h1><a href="/"> Grégory Simonian </a></h1>
    <div class="nav-right">
        <ul>
            {#each navItems as item}
                <li>
                    <a
                        class:active={page.url.pathname === item.url}
                        href={item.url}
                    >
                        {item.label.toUpperCase()}
                    </a>
                </li>
            {/each}
        </ul>
        <GregButton />
    </div>
</nav>

<style>
    a {
        text-decoration: none;
        color: black;
        font-weight: 600;
        font-size: 15px;
    }

    h1 a {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        padding: 0;
        line-height: 1;
    }

    nav {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 0 30px;
        box-sizing: border-box;
        border-bottom: 1px solid black;
    }

    .nav-right {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 30px;
    }

    .active {
        position: relative;
    }

    .active::after {
        position: absolute;
        content: "";
        height: 0.4em;
        background-color: var(--yellow-color);
        z-index: -1;
        bottom: 0.6em;
        width: var(--underline-width);
        left: -0.3em;
        right: -0.3em;
        border-radius: 0.2em;
    }
</style>
