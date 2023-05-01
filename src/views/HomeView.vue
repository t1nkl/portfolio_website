<script setup lang="ts">
import { onMounted } from 'vue'
import { navigationHome } from '@/utils/animations/navigationHome'

onMounted(() => {
  navigationHome()
})
</script>

<template>
  <div class="home-holder">
    <div id="index_logo" class="logo">
      <img
        id="index_logo-txt"
        alt="t1nkl - Web Developer - Logo"
        class="logo-txt"
        src="@/assets/logo.webp"
        width="300"
        height="386"
      />
      <div id="index_logo-bg-holder" class="logo-bg-holder">
        <div id="index_oval-big" class="logo-bg oval-big"></div>
        <div id="index_oval-small" class="logo-bg oval-small"></div>
        <div id="index_circle" class="logo-bg circle"></div>
      </div>
    </div>

    <div id="index_custom-navigation" class="custom-navigation">
      <ul>
        <li>
          <RouterLink to="/skills">skills</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline">timeline</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts">contacts</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// mixins - media query
@mixin maxquery($width, $ratio: false) {
  @if $ratio {
    @media only screen and (max-width: $width) and (min--moz-device-pixel-ratio: $ratio),
      only screen and (max-width: $width) and (-webkit-min-device-pixel-ratio: $ratio),
      only screen and (max-width: $width) and (min-device-pixel-ratio: $ratio) {
      @content;
    }
  } @else {
    @media only screen and (max-width: $width) {
      @content;
    }
  }
}

.home-holder {
  position: absolute;
  display: block;
  width: 490px;
  height: auto;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @include maxquery(640px) {
    width: 260px;
  }

  // logo
  .logo {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    @include maxquery(640px) {
      width: 260px;
      height: auto;
    }

    .logo-txt {
      position: relative;
      z-index: 4;
      margin-left: -80px;

      @include maxquery(640px) {
        width: 260px;
        height: auto;
        margin: auto;
      }

      opacity: 0;
      visibility: hidden;
    }

    .logo-bg-holder {
      position: absolute;
      display: block;
      width: 620px;
      height: auto;
      margin-top: -107px;
      right: -68px;

      @include maxquery(640px) {
        width: 320px;
        height: auto;
        margin-top: -77px;
        right: -32px;
      }
    }

    .logo-bg {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 0 0 36px rgba(0, 0, 0, 0.015), 0 0 36px rgba(0, 0, 0, 0.05);

      &.oval-big {
        width: 540px;
        height: 580px;
        background: #e8f5e9;
        margin-top: -290px;
        margin-left: -270px;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
      }

      &.oval-small {
        width: 480px;
        height: 420px;
        background: #c8e6c9;
        margin-top: -210px;
        margin-left: -240px;
        z-index: 2;
        opacity: 0;
        visibility: hidden;
      }

      &.circle {
        width: 360px;
        height: 360px;
        background: #a5d6a7;
        transform: translate(-50%, -50%);
        z-index: 3;
      }
    }
  }

  // custom navigation
  .custom-navigation {
    position: relative;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    font-size: 24px;

    ul {
      position: relative;
      display: block;
      overflow: hidden;
      width: 100%;
      list-style-type: none;
      padding: 0;
      margin: 0;
      margin-left: 48px;

      @include maxquery(640px) {
        max-width: 100%;
        text-align: center;
        margin: 0;
      }

      li {
        position: relative;
        display: block;
        float: left;
        padding: 8px;

        @include maxquery(640px) {
          display: inline;
          float: none;
          text-align: center;
        }

        a {
          font-family: 'Cardo', serif;
          text-decoration: none;
          color: #363636;
        }
      }
    }
  }
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotating-fast {
  -webkit-animation: rotating 12s linear infinite;
  -moz-animation: rotating 12s linear infinite;
  -ms-animation: rotating 12s linear infinite;
  -o-animation: rotating 12s linear infinite;
  animation: rotating 12s linear infinite;
}

@-webkit-keyframes rotating-inverse /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes rotating-inverse {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
