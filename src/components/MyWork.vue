<template>
  <div class="container my-5">
    <h2 class="display-5 text-center mb-6">My Work</h2>
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-4" v-for="project in projects" :key="project.id">
        <div class="iframe-wrapper">
          <a :href="project.link" data-fancybox="gallery" :data-width="project.width" :data-height="project.height">
            <div class="iframe-thumbnail">
              <img :src="require(`@/assets/${project.thumbnail}`)" :alt="project.title" class="img-fluid">
            </div>
          </a>
          <div class="text-center mt-2">
            <h5>{{ project.title }}</h5>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyWork',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'A brief description of Project 1.',
          link: '../Adwork/Bank/index.html',
          thumbnail: 'thumbnail1.jpg',
          width: 300,
          height: 600,
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'A brief description of Project 2.',
          link: '../Adwork/Food/index.html',
          thumbnail: 'thumbnail2.jpg',
          width: 970,
          height: 250,
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      if (typeof $ !== 'undefined' && typeof $.fancybox !== 'undefined') {
        // eslint-disable-next-line no-undef
        $('[data-fancybox]').fancybox({
          type: "iframe",
          loop: true,
          thumbs: {
              autoStart: false
          },
          buttons: ['zoom', 'slideShow', 'fullScreen', 'thumbs', 'close'],
          transitionEffect: 'slide',
          animationEffect: 'zoom',
          animationDuration: 500,
          iframe: {
            preload: false,
          },
        });
      } else {
        console.error('Fancybox is not initialized.');
      }
    });
  },
};
</script>

<style scoped>
/* Scoped styles for My Work page */

/* Ensure iframe is full viewport size */
.iframe-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.iframe-thumbnail {
    position: relative;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 1rem;
}

.iframe-thumbnail img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 0.5rem;
}
</style>
