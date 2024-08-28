<template>
  <div class="text-center">
    <h2 class="display-5">Contact Me</h2>
    <p>If you have any questions or opportunities, feel free to reach out!</p>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
};
</script>

<style scoped>
/* Scoped styles for the Contact Me page */
</style>
