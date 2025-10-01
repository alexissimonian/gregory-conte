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
    <div>
        <GregButton />
    </div>
</nav>

<style>
    a {
        text-decoration: none;
        color: black;
    }

    nav {
        display: flex;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 10px;
    }

    .active {
        color: red;
    }
</style>
