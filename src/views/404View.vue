<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

function dotsAnimation() {
  // Create the timeline for the dots animation
  var tl = gsap.timeline({ repeat: -1 })

  // Set the initial position and size of the dots
  tl.set('.dot', { scale: 0, autoAlpha: 0 })

  // Animate each dot individually
  tl.to('.dot-small', { duration: 1, scale: 1.5, autoAlpha: 1, ease: 'bounce.out' }, 0)
    .to('.dot-medium', { duration: 1, scale: 2, autoAlpha: 1, ease: 'bounce.out' }, 0.5)
    .to('.dot-large', { duration: 1, scale: 2.5, autoAlpha: 1, ease: 'bounce.out' }, 1)

  tl.to('.dot-small', { duration: 0.5, scale: 0, autoAlpha: 0, ease: 'power1.inOut' }, 1.5)
    .to('.dot-medium', { duration: 0.5, scale: 0, autoAlpha: 0, ease: 'power1.inOut' }, 2)
    .to('.dot-large', { duration: 0.5, scale: 0, autoAlpha: 0, ease: 'power1.inOut' }, 2.5)

  // Set the starting position of all the dots
  const dots = document.querySelectorAll('.dot')
  dots.forEach(function (dot: Element) {
    setDotPosition(dot as HTMLElement)
  })

  // Set the starting position of the dots
  function setDotPosition(dot: HTMLElement) {
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    var size = parseInt(dot.style.width)
    var offset = size / 2
    dot.style.left = x - offset + 'px'
    dot.style.top = y - offset + 'px'
  }

  // Animate the dots indefinitely
  gsap.to(dots, {
    duration: 10,
    x: '+=300',
    y: '+=200',
    ease: 'power1.inOut',
    stagger: {
      each: 0.5,
      yoyo: true,
      repeat: -1
    },
    onUpdate: function () {
      // Keep the dots within the window bounds
      // @ts-ignore-next-line
      dots.forEach(function (dot: HTMLElement) {
        var x = parseInt(dot.style.left)
        var y = parseInt(dot.style.top)
        var size = parseInt(dot.style.width)
        var offset = size / 2
        if (x < -offset) {
          dot.style.left = window.innerWidth + offset + 'px'
        } else if (x > window.innerWidth - offset) {
          dot.style.left = -offset + 'px'
        }
        if (y < -offset) {
          dot.style.top = window.innerHeight + offset + 'px'
        } else if (y > window.innerHeight - offset) {
          dot.style.top = -offset + 'px'
        }
      })
    }
  })
}

onMounted(() => {
  dotsAnimation()
})
</script>

<template>
  <div class="error-container">
    <h1>Oops! Page not found.</h1>
    <p>Sorry, the page you are looking for cannot be found.</p>
    <a href="/">Go back to homepage</a>
  </div>
  <div class="dots-container">
    <div class="dot dot-small"></div>
    <div class="dot dot-medium"></div>
    <div class="dot dot-large"></div>
  </div>
</template>

<style lang="scss" scoped>
.error-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
    margin-bottom: 40px;
  }

  a {
    display: inline-block;
    background-color: #000;
    color: #fff !important;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background-color: #fff;
    color: #000 !important;
  }

  .dots-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0.7;
  }

  .dot-small {
    width: 20px;
    height: 20px;
    background-color: #ffb6c1;
  }

  .dot-medium {
    width: 30px;
    height: 30px;
    background-color: #f5deb3;
  }

  .dot-large {
    width: 40px;
    height: 40px;
    background-color: #add8e6;
  }
}
</style>
