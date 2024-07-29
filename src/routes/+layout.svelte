<script lang="ts">
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import Footer from '../components/profile/Footer.svelte';
  import Header from '../components/profile/Header.svelte';
  import '../app.css';
  let y: number = 0;

  function goTop() {
    document.body.scrollIntoView();
  }

  $: currentPath = $page.url.pathname;
  let profilePage = false;
  $: {
    profilePage = currentPath === '/' || currentPath === '';
    updateBodyClassAndPrticles();
  }

  function updateBodyClassAndPrticles() {
    if (typeof window !== 'undefined') {
      console.log('i was called');
      let bodyClass = currentPath === '/' ? 'bg-slate-950 text-white relative' : '';
      document.body.className = bodyClass;
      if (profilePage) {
        particlesJS.load('particles-js', 'assets/particles.json', function () {
          console.log('callback - particles.js config loaded');
        });
      } else {
        if (
          particlesJS &&
          particlesJS.fn &&
          particlesJS.fn.vendors &&
          particlesJS.fn.vendors.destroypJS
        ) {
          particlesJS.fn.vendors.destroypJS();
        }
      }
    }
  }

  onDestroy(() => {
    if (
      typeof window !== 'undefined' &&
      particlesJS &&
      particlesJS.fn &&
      particlesJS.fn.vendors &&
      particlesJS.fn.vendors.destroypJS
    ) {
      particlesJS.fn.vendors.destroypJS();
    }
  });
</script>

{#if profilePage}
  <div
    class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
  >
    <div
      class={'fixed bottom-0 w-full duration-200 flex p-10 z-[10] ' +
        (y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
    >
      <button
        on:click={goTop}
        class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
      >
        <i class="fa-solid fa-arrow-up" />
      </button>
    </div>
    <Header {y} />
    <slot />
    <Footer />
  </div>
  <div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70">
    <div id="particles-js" class="absolute inset-0" />
  </div>
{:else}
  <slot />
{/if}
<svelte:window bind:scrollY={y} />
