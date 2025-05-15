<template>
  <div class="projects-section">
    <h2 class="display-4">Projects</h2>
    <div class="projects-grid">
      <a
        v-for="project in projects"
        :key="project.id"
        :href="project.folder + 'index.html'"
        data-fancybox="gallery"
        :data-width="project.width"
        :data-height="project.height"
        data-type="iframe"
        class="project-item"
      >
        <img
          :src="getThumbnail(project.folder)"
          alt="thumbnail"
          class="thumb"
          @error="onImageError"
        />
      </a>
    </div>
  </div>
</template>

<script>
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

export default {
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    fetch("/assets/projects.json")
      .then(response => response.json())
      .then(data => {
        this.projects = data;
        this.$nextTick(() => {
          Fancybox.bind("[data-fancybox]", {
            Toolbar: {
              display: ["close"]
            },
            Thumbs: false,
            Carousel: false,
            iframe: {
              preload: false,
              css: {
                width: '100%',
                height: '100%'
              }
            },
            on: {
              "Carousel.change": (fancybox) => {
                const slide = fancybox.getSlide();
                if (slide.type === "iframe" && slide.$iframe) {
                  const iframe = slide.$iframe[0];
                  const src = iframe.src;
                  iframe.src = src; // reload iframe
                }
              }
            }
          });
        });
      });
  },
  methods: {
    getThumbnail(folder) {
      return `${folder}thumbnail.jpg`;  // Path to thumbnail.jpg
    },
    onImageError(e) {
      e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDMwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDAiLz48L3N2Zz4=";  // Fallback image
    }
  }
};
</script>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
}

h2.display-4 {
  font-size: 4.5rem;
  font-weight: 800;
  color: #333;
  text-align: center;
  padding-bottom: 3rem;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}

.project-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  text-decoration: none;
  color: #fff;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease; /* Smooth transition for scaling */
}

/* Hover effect with animation */
.project-item:hover {
  animation: scale-up 0.3s forwards; /* Trigger animation on hover */
}
.project-item {
  animation: scale-down 0.3s forwards; /* Scale back down smoothly when mouse leaves */
}

.thumb {
  width: 300px;
  height: 150px;
  object-fit: cover;
  background: #000;
}

.title {
  text-align: center;
  font-weight: bold;
}

/* Define the scale-up animation */
@keyframes scale-up {
  0% {
    transform: scale(1); /* Initial state: no scaling */
  }
  100% {
    transform: scale(1.05); /* Final state: scale the item to 1.1 */
  }
}


/* Define the scale-down animation for mouse-out */
@keyframes scale-down {
  0% {
    transform: scale(1.05); /* Initial state: when it's scaled up */
  }
  100% {
    transform: scale(1); /* Final state: scale back to normal */
  }
}

</style>
