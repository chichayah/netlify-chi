<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5">
      <div class="container d-flex justify-content-between align-items-center w-100">
        <!-- Logo on the left -->
        <a class="navbar-brand" href="#home"><b>Alvin Naguit</b></a>

        <!-- Hamburger button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links on the right -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="flex-fill">
      <section id="home" class="bg-home">
        <HomePage />
      </section>
      <section id="work" class="full-section bg-work">
        <MyWork />
      </section>
      <section id="about" class="full-section bg-about">
        <AboutMe />
      </section>
      <section id="contact" class="bg-contact">
        <ContactMe />
      </section>
    </div>

    <footer class="bg-dark text-white text-center py-4 mt-auto">
      <p>&copy; 2025 Alvin Naguit. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue';
import MyWork from './components/MyWork.vue';
import AboutMe from './components/AboutMe.vue';
import ContactMe from './components/ContactMe.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    AboutMe,
    MyWork,
    ContactMe,
  },
};
</script>

<style>
/* Keep your existing styles — no changes needed */

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

.nav-link {
  color: #fff;
}

.full-section {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

section {
  padding-top: 10px;
}

.bg-home {
  background-color: #4df0ff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg-work {
  background-color: #ffffff;
}

.bg-about {
  background-color: #4df0ff;
}

.bg-contact {
  background-color: #ffffff;
}

@media (max-width: 768px) {
  .full-section {
    min-height: auto;
    padding: 4rem;
  }

  .section {
    padding-top: 0;
  }
}
</style>
