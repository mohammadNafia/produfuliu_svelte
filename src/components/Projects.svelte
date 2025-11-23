<script>
  import flow1 from '../assets/projects/flow-1.jpg'
  import flow2 from '../assets/projects/flow-2.jpg'
  import flow3 from '../assets/projects/flow-3.jpg'
  import eyeMeach from '../assets/projects/eye-meach.png'
</script>

<section id="projects" class="section-shell py-12 text-flow-text-primary animate-section">
  <div class="flex items-center justify-between mb-8">
    <div>
      <h3 class="text-3xl font-extrabold mb-2 text-flow-text-primary">Projects</h3>
      <p class="text-sm text-flow-text-secondary font-light">Featured work</p>
    </div>
    <span class="badge-pill">Live</span>
  </div>
  
  <!-- Flow Featured Project -->
  <div class="simple-card hover-scale overflow-hidden mb-8">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2 space-y-5">
        <div>
          <p class="text-xs text-flow-white-soft uppercase tracking-[0.3em] font-semibold mb-2">Featured Project</p>
          <h4 class="text-3xl font-bold mb-3 text-flow-text-primary">Flow</h4>
          <p class="text-base text-flow-text-secondary leading-relaxed font-light">
            A comprehensive platform for building, managing, and deploying intelligent agents.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <a 
            href="https://flow.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="simple-btn"
          >
            Visit Flow.com
          </a>
          <span class="badge-pill text-xs">Live</span>
        </div>
      </div>
      <div class="md:w-1/2 grid grid-cols-2 gap-4">
        <img 
          src={flow1} 
          alt="Flow platform screenshot 1" 
          class="rounded-flow object-cover w-full h-40 md:h-48 flow-img-border"
        />
        <img 
          src={flow2} 
          alt="Flow platform screenshot 2" 
          class="rounded-flow object-cover w-full h-40 md:h-48 flow-img-border"
        />
        <img 
          src={flow3} 
          alt="Flow platform screenshot 3" 
          class="rounded-flow object-cover w-full h-40 md:h-48 flow-img-border col-span-2"
        />
      </div>
    </div>
  </div>

  <!-- Eye meach Project -->
  <div class="simple-card hover-scale overflow-hidden mb-6">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2 space-y-5">
        <div>
          <p class="text-xs text-flow-white-soft uppercase tracking-[0.3em] font-semibold mb-2">Featured Project</p>
          <h4 class="text-3xl font-bold mb-3 text-flow-text-primary">Eye meach</h4>
          <p class="text-base text-flow-text-secondary leading-relaxed font-light">
            A mechanical-electric-software project aimed to work as the human eye. Combining robotics, electronics, and intelligent software to replicate human vision capabilities.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span class="badge-pill text-xs">In Development</span>
        </div>
      </div>
      <div class="md:w-1/2">
        <img 
          src={eyeMeach} 
          alt="Eye meach project screenshot" 
          class="rounded-flow object-cover w-full h-72 md:h-96 flow-img-border"
        />
      </div>
    </div>
  </div>

  
</section>
