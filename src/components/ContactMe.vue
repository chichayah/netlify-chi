<template>
  <div class="contact-me container py-5">
    <h2 class="section-title-cm mb-4">Contact Me</h2>
    <p class="lead-contact mb-5">
      I’d love to hear from you! Feel free to reach out to me for any questions or opportunities. You can reach me via email or connect with me on social media.
    </p>

    <div class="contact-info text-center">
      <p class="mb-3">
        You can reach me at <strong><a href="mailto:naguitalvinchristian@gmail.com">naguitalvinchristian@gmail.com</a></strong>
      </p>

      <div class="social-links">
        <a href="https://www.linkedin.com/in/alvin-christian-naguit-951b88192/" target="_blank" class="social-icon">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/chichayah10" target="_blank" class="social-icon">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/chicoelfuego/" target="_blank" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>

<style scoped>
.contact-me {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem; /* Padding around the content */
  color: #000;
  min-height: auto; /* Allow the section to shrink based on content size */
}

.section-title-cm {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.contact-info {
  text-align: center;
  margin-top: 2rem;
}

.contact-info p {
  font-size: 1.2rem;
}

.lead-contact {
  text-align: center;
}

.social-links {
  margin-top: 2rem;
}

.social-icon {
  margin: 0 15px;
  font-size: 2rem;
  color: #343a40;
  text-decoration: none;
}

.social-icon:hover {
  color: #007bff;
}

.social-icon i {
  transition: color 0.3s ease;
}

/* Add font-awesome for social icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>