<template>
  <div class="about-me container py-5 text-center">
    <div class="mb-5" data-aos="fade-up">
      <h2 class="section-title mb-4">About Me</h2>
      <p class="lead mx-auto" style="max-width: 800px;">My journey in technology began with a computer course, but I soon shifted to finance, intrigued by its complexities. While finance was interesting, I realized it wasn’t where my passion truly lay. I found myself drawn back to coding and development, which sparked a genuine excitement in me. The problem-solving and creativity involved in building with code felt incredibly fulfilling.</p>
      <p class="lead mx-auto" style="max-width: 800px;">What I love most about development is the constant learning and the endless possibilities. I’m especially passionate about animating elements and creating interactive, visually engaging experiences. The blend of art and logic in coding is where I feel most at home.</p>
      <p class="lead mx-auto" style="max-width: 800px;">I’m always eager to take on new challenges, learn, and improve my skills. Every project is an opportunity to grow and push my boundaries.</p>
    </div>

    <hr class="my-5" />

    <div data-aos="fade-up">
      <h2 class="section-title mb-5">Experience</h2>
      <div class="timeline">
        <div
          v-for="(job, index) in reversedJobs"
          :key="index"
          class="timeline-item"
          :class="getPositionClass(index)"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h4 class="mb-1">{{ job.title }}</h4>
            <h6 class="mb-0">{{ job.company }}</h6>
            <small>{{ job.dates }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AboutMe',
  data() {
    return {
      jobs: [
        { title: 'Production Lead', company: 'Candy Digital', dates: 'June 2023 - Present' },
        { title: 'Senior Rich Media Developer', company: 'Candy Digital', dates: 'August 2017 - June 2023' },
        { title: 'Junior Rich Media Developer', company: 'Candy Digital', dates: 'February 2016 - August 2017' },
        { title: 'Flash Developer', company: 'Wideout Workforces Inc.', dates: 'February 2014 - January 2016' }
      ]
    };
  },
  computed: {
    reversedJobs() {
      return this.jobs.slice().reverse();
    }
  },
  methods: {
    getPositionClass(index) {
      if (index % 2 === 0) {
        // Job 1 & 3 (even indexes after reverse) — left side, dot right
        return 'left dot-right';
      } else {
        // Job 2 & 4 (odd indexes) — right side, dot left
        return 'right dot-left';
      }
    }
  },
  mounted() {
    AOS.init({ disable: true, once: true, duration: 800 });
  }
};
</script>

<style scoped>
.about-me {
  max-width: 900px;
  margin: 0 auto;
  color: #000;
}

.section-title {
  font-size: 4rem;
  font-weight: 700;
  color: #000;
}

.timeline {
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: #343a40;
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  color: #000;
}

/* Dot style */
.timeline-dot {
  width: 20px;
  height: 20px;
  background: #343a40;
  border: 4px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #343a40;
  position: absolute;
}

/* Content box */
.timeline-content {
  background: #f8f9fa;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  max-width: 350px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #000;
}

/* Left side layout (Job 1 & 3) */
.timeline-item.left {
  justify-content: flex-end;
  text-align: right;
  left: 0;
}

.timeline-item.left .timeline-dot {
  right: -10px;
  left: auto;
}

/* Right side layout (Job 2 & 4) */
.timeline-item.right {
  justify-content: flex-start;
  text-align: left;
  left: 50%;
}

.timeline-item.right .timeline-dot {
  left: -10px;
  right: auto;
}

/* Dot on right (for jobs 1 & 3) */
.timeline-item.dot-right .timeline-dot {
  order: 2;
  margin-left: 1rem;
}

/* Dot on left (for jobs 2 & 4) */
.timeline-item.dot-left .timeline-dot {
  order: 1;
  margin-right: 1rem;
}

/* Divider line between sections */
hr {
  border-top: 2px solid #343a40;
  opacity: 0.4;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .timeline::before {
    left: 8px;
    transform: none;
    width: 3px;
  }

  .timeline-item {
    width: 100%;
    flex-direction: column;
    text-align: center;
    left: 0 !important;
  }

  .timeline-dot {
    margin: 1rem 0;
  }

  .timeline-content {
    text-align: center;
  }
}

</style>
