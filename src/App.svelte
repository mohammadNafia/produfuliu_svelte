<script>
  import { onMount } from 'svelte'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  import Navbar from './components/Navbar.svelte'
  import Splash from './components/Splash.svelte'
  import Hero from './components/Hero.svelte'
  import About from './components/About.svelte'
  import Awards from './components/Awards.svelte'
  import Teaser from './components/Teaser.svelte'
  import Projects from './components/Projects.svelte'
  import ContactForm from './components/ContactForm.svelte'
  import Footer from './components/Footer.svelte'

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray('.animate-section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      })
    })

    gsap.utils.toArray('.parallax').forEach((el) => {
      gsap.to(el, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          scrub: true,
        },
      })
    })
  })
</script>

<Navbar />

<main class="relative">
  <Splash />
  <div class="container sections-grid">
    <div class="tile span-2"><Hero /></div>
    <div class="tile"><About /></div>
    <div class="tile"><Awards /></div>
    <div class="tile"><Teaser /></div>
    <div class="tile"><Projects /></div>
    <div class="tile span-2"><ContactForm /></div>
  </div>
</main>

<Footer />
