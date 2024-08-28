<template>
  <div class="about-me-section">
    <div class="profile-background">
      <div class="overlay">
        <h2 class="display-5">About Me</h2>
        <p class="lead">Hello! I'm [Your Name], a passionate web developer with experience in HTML, CSS, and JavaScript.</p>
        <p>Feel free to explore my work and get in touch if you have any questions or opportunities!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
/* Scoped styles for the About Me page */

/* Section styling */
.about-me-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
}

/* Background image styling */
.profile-background {
  background-image: url('../assets/profile.jpg');
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /* Center the text vertically */
  justify-content: center; /* Center the text horizontally */
  color: white; /* Ensure text is readable */
}

/* Text overlay styling */
.overlay {
  text-align: center;
  padding: 20px; /* Add padding if needed */
  background: rgba(0, 0, 0, 0.5); /* Dark semi-transparent background for text readability */
  border-radius: 10px; /* Optional: Rounded corners for the overlay */
}
</style>
