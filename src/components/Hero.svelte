<script>
  import { onMount } from 'svelte'
  import { gsap } from 'gsap'
  import heroPhoto from '../assets/images/doctor.jpg'

  const fragments = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    size: 60 + i * 12,
  }))

  onMount(() => {
    gsap.to('.fragment', {
      y: -10,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.18,
    })
  })
</script>

<section id="hero" class="section-shell text-flow-text-primary animate-section">
  <div class="simple-card">
    <div class="flex flex-col gap-10 md:flex-row md:items-center">
      <div class="w-full md:w-1/2 space-y-5">
        <p class="text-xs uppercase tracking-[0.4em] text-flow-white-soft font-semibold">Reconstruction</p>
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight text-flow-text-primary">
          Mohammed Nafia
        </h1>
        <p class="text-base text-flow-text-secondary leading-relaxed font-light">
          Modular engineering. Problem-solving in motion. Complexity moving toward clarity with motion-led visuals.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="badge-pill">Front-end</span>
          <span class="badge-pill">Motion UI</span>
          <span class="badge-pill">AI & Robotics</span>
          <span class="badge-pill">Systems</span>
        </div>
      </div>

      <div class="w-full md:w-1/2 flex flex-col gap-6">
        <div class="flex items-center gap-5 flow-gradient-border rounded-flow-lg p-5 bg-flow-glass-bg backdrop-blur-[20px]">
          <img 
            src={heroPhoto} 
            alt="Portrait" 
            class="h-24 w-24 rounded-2xl object-cover flow-img-border" 
          />
          <div>
            <p class="font-bold text-xl text-flow-text-primary">Software Engineer</p>
            <p class="text-sm text-flow-text-secondary font-light">6-8 months in, leveling up daily.</p>
          </div>
        </div>
        <div class="flex gap-3 parallax">
          {#each fragments as fragment}
            <div
              class="fragment rounded-flow hover-scale relative overflow-hidden"
              style={`width:${fragment.size}px; height:${fragment.size}px;`}
            >
              <div class="absolute inset-0 bg-gradient-neon opacity-75"></div>
            </div>
          {/each}
        </div>
        <div class="flex gap-4">
          <button class="simple-btn w-fit">See my work</button>
          <a href="#projects" class="px-6 py-3 rounded-xl flow-gradient-border text-sm text-flow-text-primary hover:bg-white/10 transition-all duration-300 font-medium">
            View projects
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
