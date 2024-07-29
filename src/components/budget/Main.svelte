<script>
  import { goto } from '$app/navigation';

  const goHome = () => {
    goto('/');
  };
</script>

<main class="bg-slate-950 relative">
  <div class="bg-yellow-50 w-full h-11">
    <button on:click={goHome}>go home</button>
  </div>
</main>
