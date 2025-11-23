<script>
  import sora from '../assets/awards/sora.jpg'
  import shada from '../assets/awards/shada.jpg'
  import cppCert from '../assets/awards/cpp-cert.jpg'
</script>

<section id="awards" class="section-shell text-flow-text-primary animate-section">
  <h3 class="text-3xl font-extrabold mb-8 text-flow-text-primary">Awards & Certifications</h3>
  
  <div class="space-y-8">
    <!-- Award 1: One Year AI Program -->
    <div class="simple-card hover-scale">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2 space-y-5">
          <div>
            <p class="text-xs text-flow-white-soft uppercase tracking-[0.3em] font-semibold mb-2">Award</p>
            <h4 class="text-2xl font-bold mb-3 text-flow-text-primary">Completing One Year Program by the High Minister of Iraq Republic</h4>
            <p class="text-base text-flow-text-secondary leading-relaxed font-light">
              The course aimed to teach participants about AI software and working skills (soft skills and hard skills). A comprehensive program designed to develop both technical expertise and professional capabilities in artificial intelligence.
            </p>
          </div>
        </div>
        <div class="md:w-1/2 grid grid-cols-2 gap-4">
          <img 
            src={sora} 
            alt="AI Program Certificate - Sora" 
            class="rounded-flow object-cover w-full h-48 flow-img-border"
          />
          <img 
            src={shada} 
            alt="AI Program Certificate - Shada" 
            class="rounded-flow object-cover w-full h-48 flow-img-border"
          />
        </div>
      </div>
    </div>

    <!-- Award 2: C++ Programming Certification -->
    <div class="simple-card hover-scale">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2 space-y-5">
          <div>
            <p class="text-xs text-flow-white-soft uppercase tracking-[0.3em] font-semibold mb-2">Certification</p>
            <h4 class="text-2xl font-bold mb-3 text-flow-text-primary">C++ Programming Certification</h4>
            <p class="text-base text-flow-text-secondary leading-relaxed font-light mb-3">
              I've completed a comprehensive C++ course covering foundational principles, arrays, pointers, Object-Oriented Programming (OOP), and an introduction to data structures.
            </p>
            <p class="text-base text-flow-text-secondary leading-relaxed font-light">
              This journey enhanced my ability to think algorithmically and solve programming challenges efficiently. Passionate about leveraging C++ to build robust and scalable solutions!
            </p>
          </div>
        </div>
        <div class="md:w-1/2">
          <img 
            src={cppCert} 
            alt="C++ Programming Certification" 
            class="rounded-flow object-cover w-full h-72 flow-img-border"
          />
        </div>
      </div>
    </div>
  </div>
</section>
