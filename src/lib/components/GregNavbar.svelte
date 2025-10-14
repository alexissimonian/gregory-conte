<script lang="ts">
    import { page } from "$app/state";
    import GregButton from "./GregButton.svelte";

    const navItems = [
        { id: "parcours", label: "parcours", url: "/parcours" },
        { id: "spectacles", label: "spectacles de contes", url: "/spectacles" },
        { id: "ateliers", label: "ateliers d’écriture", url: "/ateliers" },
    ];

    let isMenuOpen = false;

    function onHamburgerMenuClicked() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav>
    <h1><a href="/"> Grégory Simonian </a></h1>
    <div class="nav-right">
        <div class="desktop-nav-right">
            <ul class="desktop-nav">
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
        <div
            class="mobile-nav-right"
            class:menuopen={isMenuOpen}
            onclick={onHamburgerMenuClicked}
        >
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
        </div>
    </div>

    <div class="sideNav" class:sideNavOpen={isMenuOpen}>
        <a
            href="javascript:void(0)"
            class="closeBtn"
            onclick={onHamburgerMenuClicked}>&times;</a
        >
        <ul class="mobile-nav">
            <li>
                <a
                    class:active={page.url.pathname === "/"}
                    href="/"
                    onclick={onHamburgerMenuClicked}
                >
                    ACCUEIL</a
                >
            </li>
            {#each navItems as item}
                <li>
                    <a
                        class:active={page.url.pathname === item.url}
                        href={item.url}
                        onclick={onHamburgerMenuClicked}
                    >
                        {item.label.toUpperCase()}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style lang="scss">
    a {
        text-decoration: none;
        color: black;
        font-weight: 600;
        font-size: 1rem;
    }

    h1 a {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        line-height: 1;
        white-space: nowrap;
    }

    nav {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 0 2rem;
        box-sizing: border-box;
        border-bottom: 1px solid black;
    }

    .mobile-nav-right {
        display: none;

        @media screen and (width < 1325px) {
            display: block;
            cursor: pointer;
        }

        .bar-1,
        .bar-2,
        .bar-3 {
            width: 2rem;
            height: 2px;
            transition: 0.4s;
            background-color: black;
            margin: 6px 0;
        }
    }

    .menuopen .bar-1 {
        transform: translate(0, 8px) rotate(-45deg);
    }
    .menuopen .bar-2 {
        opacity: 0;
    }
    .menuopen .bar-3 {
        transform: translate(0, -8px) rotate(45deg);
    }

    .sideNav {
        height: 100%;
        width: 0;
        position: fixed;
        top: 0;
        right: 0;
        background-color: white;
        overflow-x: hidden;
        transition: 0.5s;
        border-left: 1px solid black;
        z-index: 2;
    }

    .sideNav.sideNavOpen {
        width: 95%;
    }

    .desktop-nav-right {
        display: flex;
        align-items: center;
        gap: 2.5rem;

        @media screen and (max-width: $breakpoint-lg) {
            display: none;
        }
    }

    .desktop-nav {
        list-style: none;
        display: flex;
        gap: 2rem;
    }

    .active {
        position: relative;
    }

    .active::after {
        position: absolute;
        content: "";
        height: 0.4em;
        background-color: $yellow-color;
        z-index: -1;
        bottom: 0.6em;
        width: $underline-width;
        left: -0.3em;
        right: -0.3em;
        border-radius: 0.2em;
    }

    .closeBtn {
        font-size: 3rem;
        position: absolute;
        top: 1rem;
        right: 2rem;
        line-height: 1;
    }

    .mobile-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 2rem;
        white-space: nowrap;

        a {
            font-weight: 700;
            font-size: 1.1rem;
        }
    }
</style>
