<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5">
      <div class="container">
        <router-link class="navbar-brand" to="/">My Portfolio</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">My Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="flex-fill">
      <section id="about" class="full-section bg-about">
        <AboutMe />
      </section>
      <section id="work" class="full-section bg-work">
        <MyWork />
      </section>
      <section id="contact" class="full-section bg-contact">
        <ContactMe />
      </section>
    </div>

    <footer class="bg-dark text-white text-center py-4 mt-auto">
      <p>&copy; 2024 [Your Name]. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import MyWork from './components/MyWork.vue';
import ContactMe from './components/ContactMe.vue';

export default {
  name: 'App',
  components: {
    AboutMe,
    MyWork,
    ContactMe,
  },
};
</script>

<style>
/* Ensure the main container takes full height and footer is at the bottom */
/* Ensure the main container takes full height and footer is at the bottom */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex-fill {
  flex: 1;
}

footer {
  background: #343a40;
  color: #ffffff;
  padding: 1.5rem 0;
}

.full-section {
  width: 100vw; /* Full width of the viewport */
  min-height: 100vh; /* Minimum height of the viewport to ensure full visibility */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem; /* Add padding for better spacing */
}

section {
  padding-top: 10px; /* Adjust to account for fixed navbar */
}

/* Specific background colors for each section */
.bg-about {
  background-color: #25d9c8;
}

.bg-work {
  background-color: #333333;
}

.bg-contact {
  background-color: #25d9c8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .full-section {
    min-height: auto; /* Allow the section to grow based on content on smaller screens */
    padding: 4rem; /* Adjust padding for smaller screens */
  }

  .section {
    padding-top: 0; /* Remove top padding on smaller screens if needed */
  }
}

</style>
