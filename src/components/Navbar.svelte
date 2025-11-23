<script>
  let open = false
  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#awards', label: 'Awards' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
</script>

<header class="w-full flow-border-b bg-flow-charcoal/60 backdrop-blur-[24px] text-flow-text-primary sticky top-0 z-50 transition-all duration-500">
  <div class="container flex items-center justify-between py-5">
    <a href="#hero" class="flex items-center gap-3 font-bold text-xl tracking-tight group">
      <span class="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-neon text-flow-black font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:scale-110">
        <span class="relative z-10">MN</span>
      </span>
      <span class="tracking-wide text-lg font-semibold">Mohammed</span>
    </a>
    <nav class="hidden gap-2 text-sm md:flex">
      {#each links as link}
        <a 
          href={link.href} 
          class="px-4 py-2 rounded-xl flow-gradient-border hover:bg-white/10 transition-all duration-300 font-medium"
        >
          {link.label}
        </a>
      {/each}
    </nav>
    <div class="hidden md:flex items-center gap-3">
      <a href="#contact" class="simple-btn text-sm">Hire me</a>
    </div>
    <button 
      class="md:hidden text-flow-text-primary text-2xl p-2 rounded-xl hover:bg-white/10 transition-all duration-300" 
      aria-label="Toggle menu" 
      on:click={() => (open = !open)}
    >
      ☰
    </button>
  </div>
  {#if open}
    <div class="md:hidden flow-border-t bg-flow-charcoal/95 backdrop-blur-[24px] px-4 pb-4 space-y-2">
      {#each links as link}
        <a 
          href={link.href} 
          class="block flow-gradient-border rounded-xl px-4 py-3 hover:bg-white/10 transition-all duration-300" 
          on:click={() => (open = false)}
        >
          {link.label}
        </a>
      {/each}
      <a href="#contact" class="block text-center simple-btn w-full mt-2">Hire me</a>
    </div>
  {/if}
</header>
