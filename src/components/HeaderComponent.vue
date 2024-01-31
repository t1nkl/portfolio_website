<script setup lang="ts">
import { onMounted } from 'vue'
import { navigationHeader } from '@/utils/animations/navigationHeader'

onMounted(() => {
  navigationHeader()
})
</script>

<template>
  <nav class="header-navigation">
    <div class="header-logo">
      <RouterLink to="/">
        <img
          id="header_logo-txt"
          alt="t1nkl - Web Developer - Logo"
          class="logo-txt"
          height="199"
          src="@/assets/logo.webp"
          width="380"
        />
        <div class="logo-bg-holder">
          <div id="header_oval-big" class="logo-bg oval-big"></div>
          <div id="header_oval-small" class="logo-bg oval-small"></div>
          <div id="header_circle" class="logo-bg circle"></div>
        </div>
      </RouterLink>
    </div>

    <div id="header_main-navigation" class="main-navigation">
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
  </nav>
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

.header-navigation {
  position: relative;
  width: calc(100% - 32px);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 16px;
  max-width: 100%;

  @include maxquery(640px) {
    padding: 30px 0px;
  }

  .header-logo {
    position: relative;
    float: left;
    display: flex;
    align-items: center;
    max-width: 120px;
    height: auto;

    @include maxquery(640px) {
      width: 260px;
      height: auto;
    }

    .logo-txt {
      position: relative;
      z-index: 4;
      width: 50px;
      height: auto;
      margin: 3px;
      opacity: 0;
      visibility: hidden;
    }

    .logo-bg-holder {
      position: absolute;
      display: block;
      width: 256px;
      height: auto;
      margin-top: -25px;
      left: -80px;
    }

    .logo-bg {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.015), 0 0 7px rgba(0, 0, 0, 0.05);

      &.oval-big {
        width: 76px;
        height: 82px;
        background: #a5d6a7;
        margin-top: -41px;
        margin-left: -38px;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
      }

      &.oval-small {
        width: 68px;
        height: 60px;
        background: #a5d6a7;
        margin-top: -30px;
        margin-left: -34px;
        z-index: 2;
        opacity: 0;
        visibility: hidden;
      }

      &.circle {
        width: 48px;
        height: 48px;
        background: #a5d6a7;
        transform: translate(-50%, -50%);
        z-index: 3;
      }
    }
  }

  // navigation main
  .main-navigation {
    ul {
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 400px;
      right: -10px;
      float: right;
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0;

      @include maxquery(640px) {
        max-width: 320px;
        top: -24px;
      }

      li {
        position: relative;
        display: block;
        float: left;
        padding: 8px;

        @include maxquery(640px) {
          width: calc(100% - 16px);
          display: block;
          text-align: right;
          padding-top: 0;
          padding-bottom: 0;
        }

        a {
          font-family: 'Open Sans', serif;
          text-decoration: none;
          color: #363636;
        }
      }
    }
  }
}
</style>
