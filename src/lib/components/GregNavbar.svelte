<script lang="ts">
  import { page } from "$app/state";
  import GregButton from "./GregButton.svelte";
  import { onMount, tick } from "svelte";

  const navItems = [
    { id: "spectacles", label: "spectacles de contes", url: "/spectacles" },
    { id: "ateliers", label: "ateliers d’écriture", url: "/ateliers" },
    { id: "parcours", label: "parcours", url: "/parcours" },
  ];

  let isMenuOpen = false;
  let isSticky = false;
  let navElement: HTMLElement;
  let navHeight = 0;

  function onHamburgerMenuClicked(event: MouseEvent | KeyboardEvent) {
    if (event instanceof KeyboardEvent) {
      if (event.key === " " || event.key === "Enter") {
        isMenuOpen = !isMenuOpen;
      }
      return;
    }

    isMenuOpen = !isMenuOpen;
  }

  function handleScroll() {
    // Only apply sticky behavior on mobile/tablet (max-width: $breakpoint-lg)
    const isMobileOrTablet = window.innerWidth <= 1110; // Adjust if $breakpoint-lg is different
    isSticky = window.scrollY > 0 && isMobileOrTablet;

    // Add/remove top margin to body to prevent jump (only on mobile/tablet)
    if (typeof document !== "undefined" && isMobileOrTablet) {
      const body = document.body;
      if (isSticky) {
        body.style.marginTop = `${navHeight}px`;
      } else {
        body.style.marginTop = "0";
      }
    } else if (typeof document !== "undefined" && !isMobileOrTablet) {
      // Ensure margin is removed on desktop
      document.body.style.marginTop = "0";
    }
  }

  function updateNavHeight() {
    if (navElement) {
      navHeight = navElement.getBoundingClientRect().height;
    }
  }

  onMount(async () => {
    await tick(); // Wait for DOM to be fully rendered
    updateNavHeight();
  });

  $: if (navElement) {
    updateNavHeight();
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav class:sticky={isSticky} bind:this={navElement}>
  <h1><a href="/"> Grégory Simonian </a></h1>
  <div class="nav-right">
    <div class="desktop-nav-right">
      <ul class="desktop-nav">
        {#each navItems as item}
          <li>
            <a class:active={page.url.pathname === item.url} href={item.url}>
              {item.label.toUpperCase()}
            </a>
          </li>
        {/each}
      </ul>
      <GregButton />
    </div>
    <button
      class="mobile-nav-right"
      class:menuopen={isMenuOpen}
      onclick={onHamburgerMenuClicked}
      aria-label="Toggle navigation menu"
    >
      <div class="bar-1"></div>
      <div class="bar-2"></div>
      <div class="bar-3"></div>
    </button>
  </div>

  <div
    class="sideNav"
    class:sideNavOpen={isMenuOpen}
    style="top: {navHeight}px; height: calc(100vh - {navHeight}px); max-height: calc(100vh - {navHeight}px);"
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
      <div
        onclick={onHamburgerMenuClicked}
        onkeydown={onHamburgerMenuClicked}
        aria-label="Toggle navigation menu"
        role="button"
        tabindex="0"
      >
        <GregButton />
      </div>
    </ul>
  </div>
</nav>

<style lang="scss">
  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: $nav-link-lg;
    text-wrap: nowrap;

    @media screen and (max-width: $breakpoint-xl) {
      font-size: $nav-link-md;
    }
  }

  h1 a {
    font-size: $h1-size-lg;
    font-weight: $bold-lg;
    margin: 0;
    padding: 0;
    line-height: 1;
    white-space: nowrap;

    @media screen and (max-width: $breakpoint-xl) {
      font-size: $h1-size-md;
    }

    @media screen and (max-width: $breakpoint-md) {
      font-size: $h1-size-s;
    }

    @media screen and (max-width: $breakpoint-s) {
      font-size: $h1-size-xs;
    }
  }

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: $nav-padding-lg;
    box-sizing: border-box;
    border-bottom: 1px solid $black-color;
    background-color: $white-color;
    z-index: 10;

    @media screen and (max-width: $breakpoint-xl) {
      padding: $nav-padding-md;
    }

    @media screen and (max-width: $breakpoint-lg) {
      &.sticky {
        position: fixed;
        top: 0;
      }
    }
  }

  .mobile-nav-right {
    display: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    @media screen and (max-width: $breakpoint-lg) {
      display: block;
      cursor: pointer;
    }

    .bar-1,
    .bar-2,
    .bar-3 {
      width: 2rem;
      height: 2px;
      transition: 0.2s;
      background-color: $black-color;
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
    width: 0;
    position: fixed;
    right: 0;
    background-color: white;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: 0.3s;
    border-left: 1px solid $black-color;
    z-index: 2;
  }

  .sideNav.sideNavOpen {
    width: 95%;
  }

  .desktop-nav-right {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: $breakpoint-xl) {
      gap: 1rem;
    }

    @media screen and (max-width: $breakpoint-lg) {
      display: none;
    }
  }

  .desktop-nav {
    list-style: none;
    display: flex;
    gap: 2rem;

    @media screen and (max-width: $breakpoint-xl) {
      gap: 1.5rem;
    }
  }

  .active {
    position: relative;
    z-index: 2;
  }

  .active::after {
    position: absolute;
    content: "";
    height: 0.5em;
    background-color: $yellow-color;
    z-index: -1;
    bottom: 0.5em;
    width: $underline-width;
    left: $underline-overflow;
    right: $underline-overflow;
    border-radius: $underline-border-radius;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height: 100%;
    list-style: none;
    padding: 3rem;
    margin: 0;
    gap: 2rem;
    white-space: nowrap;

    a {
      font-weight: $bold-lg;
      font-size: 1.2rem;
    }
  }
</style>
