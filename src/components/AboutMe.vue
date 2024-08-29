<template>
  <div class="about-section d-flex align-items-center justify-content-center">
    <!-- Particle canvas -->
    <canvas id="particles-canvas"></canvas>
    <div class="container position-relative">
      <div class="row">
        <div class="col-md-5 text-black d-flex align-items-center justify-content-center">
          <div class="am-text">
            <h2 class="display-4">Hi&nbsp;There!</h2>
            <p class="lead">I'm&nbsp;<span class="text-white">Alvin</span>.</p>
            <p>I&nbsp;am&nbsp;a&nbsp;<span class="text-white">Rich&nbsp;Media&nbsp;Developer</span>.</p>
            <!-- Larger Button -->
            <div class="text-center text-md-start">
              <a href="#work" class="btn btn-custom mt-3">View My Work</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <img src="../assets/profile.png" alt="Profile Image" class="img-fluid profile-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      const canvas = document.querySelector('#particles-canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      class Particle {
        constructor(x, y, effect) {
          this.originX = x;
          this.originY = y;
          this.effect = effect;
          this.x = Math.floor(x);
          this.y = Math.floor(y);
          this.ctx = this.effect.ctx;
          this.ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
          this.vx = 0;
          this.vy = 0;
          this.ease = 0.2;
          this.friction = 0.95;
          this.dx = 0;
          this.dy = 0;
          this.distance = 0;
          this.force = 0;
          this.angle = 0;
          this.size = Math.floor(Math.random() * 4);
          this.alpha = .5;
          this.draw();
        }

        draw() {
          this.ctx.beginPath();
          // this.ctx.fillRect(this.x, this.y, this.size, this.size)
          this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Draw circle
          this.ctx.fill();
        }

        update() {
          this.dx = this.effect.mouse.x - this.x;
          this.dy = this.effect.mouse.y - this.y;
          this.distance = this.dx * this.dx + this.dy * this.dy;
          this.force = -this.effect.mouse.radius / this.distance * 8;

          if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
          }

          this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
          this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
          this.draw();
        }
      }

      class Effect {
        constructor(width, height, context) {
          this.width = width;
          this.height = height;
          this.ctx = context;
          this.particlesArray = [];
          this.gap = 20;
          this.mouse = {
            radius: 3000,
            x: 0,
            y: 0
          };
          window.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX * window.devicePixelRatio;
            this.mouse.y = e.pageY * window.devicePixelRatio;
          });

          window.addEventListener('resize', () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            this.width = canvas.width;
            this.height = canvas.height;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            this.particlesArray = [];
            this.init();
          });
          this.init();
        }

        init() {
          for (let x = 0; x < this.width; x += this.gap) {
            for (let y = 0; y < this.height; y += this.gap) {
              this.particlesArray.push(new Particle(x, y, this));
            }
          }
        }

        update() {
          this.ctx.clearRect(0, 0, this.width, this.height);
          for (let i = 0; i < this.particlesArray.length; i++) {
            this.particlesArray[i].update();
          }
        }
      }

      let effect = new Effect(canvas.width, canvas.height, ctx);
      function animate() {
        effect.update();
        requestAnimationFrame(animate);
      }
      animate();
    }
  }
};
</script>

<style scoped>
.about-section {
  height: 100vh; /* Full height of the viewport */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Ensure container is positioned correctly */
}

.container {
  padding: 2rem;
  position: relative; /* Ensure container is above the canvas */
  z-index: 1; /* Ensure container is above the canvas */
}

.profile-image {
  max-width: 100%; /* Ensure the image scales with the container width */
  height: auto; /* Maintain aspect ratio */
}

canvas {
  position: absolute; /* Position the canvas behind content */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Ensure canvas is behind other content */
  background-color: transparent; /* Ensure canvas background is transparent */
}

.am-text {
  line-height: 2.5em;
}

.text-black {
  padding: 1rem; /* Adjust padding for better spacing */
}

h2.display-4 {
  font-size: 4.5rem; /* Adjust size for responsiveness */
  font-weight: 800;
}

p.lead {
  font-size: 4.5rem; /* Adjust size for responsiveness */
  font-weight: 800;
}

p {
  font-size: 1.5rem; /* Adjust size for responsiveness */
  font-weight: 800;
}

p.text-white {
  font-size: 1.5rem; /* Ensure consistency */
  font-weight: 800;
  color: #ffffff; /* Ensure the text is white */
}

.btn-custom {
  background-color: #333333; /* Dark color for contrast */
  color: #ffffff; /* White text */
  border: none;
  font-size: 1rem; /* Adjust font size */
  padding: 0.75rem 1.5rem; /* Adjust padding for better click area */
  border-radius: 0.5rem; /* Rounded corners */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition */
  font-weight: 600;
}

.btn-custom:hover {
  background-color: #ffffff; /* White background when hovered */
  color: #333333; /* Dark text when hovered */
}

@media (max-width: 992px) {
  .am-text {
    line-height: 2em;
  }

  h2.display-4 {
    font-size: 3rem; /* Adjust font size for smaller screens */
  }

  p.lead {
    font-size: 3rem; /* Adjust font size for smaller screens */
  }

  p {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
}

@media (max-width: 768px) {
  h2.display-4 {
    font-size: 3.5rem; /* Adjust font size for smaller screens */
    text-align: center;
  }

  p.lead {
    font-size: 3.5rem; /* Adjust font size for smaller screens */
    text-align: center;
  }

  p {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
    text-align: center;
  }

  .btn-custom {
    text-align: center;
  }

  .profile-image {
    padding-top: 1rem;
  }
}
</style>
