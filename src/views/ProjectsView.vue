<script setup lang="ts">
import VLazyImage from 'v-lazy-image'
import { FastAverageColor } from 'fast-average-color'
import { useProjectsStore } from '@/stores/projects'
import { useSkillsStore } from '@/stores/skills'
import TextFlip from '@/components/animations/TextFlip.vue'

const skillsStore = useSkillsStore()
const projectsStore = useProjectsStore()

function over(event: MouseEvent) {
  const target = event.target as HTMLElement

  new FastAverageColor()
    .getColorAsync(target.dataset.image)
    .then((color) => {
      document.getElementsByTagName('body')[0].style.backgroundColor = color.hex
    })
    .catch(() => {
      document.getElementsByTagName('body')[0].style.backgroundColor = skillsStore.getRandomColor()
    })
}
function leave() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#FFFFFF'
}
</script>

<template>
  <div class="projects">
    <div class="works-common-holder fade-component">
      <TextFlip
        :static-words="''"
        :dynamic-words="['Every.', 'Project.', 'Experienced.']"
        :text-align="'left'"
      />
    </div>

    <h2 class="divider-line fade-component"><span>projects</span></h2>

    <div class="works-holder fade-component">
      <div
        v-for="project in projectsStore.getProjectsList"
        :key="project.title"
        :data-image="project.image"
        class="work"
        @mouseenter="over($event)"
        @mouseleave="leave()"
      >
        <VLazyImage
          :alt="'t1nkl - Web Developer - Projects - ' + project.title"
          :src="project.image"
          class="logo"
          src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
        />

        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #ffffff !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #ffffff !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #ffffff !important"></div>
        </div>

        <div class="content">
          <p>
            <strong>COMPANY</strong>
            <br />
            <span class="content__company" v-html="project.company"></span>
          </p>
          <h2 class="content__project" v-if="project.url">
            <a :href="project.url" target="_blank">{{ project.title }}</a>
          </h2>
          <h2 v-else>{{ project.title }}</h2>
          <p>
            <strong>TYPE</strong><br /><span style="font-size: 20px" v-html="project.type"></span>
          </p>
          <p>
            <strong>STACK</strong><br /><span style="font-size: 20px" v-html="project.stack"></span>
          </p>
        </div>
      </div>
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

.projects {
  .v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
  }

  .v-lazy-image-loaded {
    filter: blur(0);
  }

  .works-common-holder {
    .content {
      position: relative;
      display: block;
      overflow: hidden;
      width: calc(100vw - 120px);
      max-width: 760px;
      padding-bottom: 20px;
      padding-left: 60px;
      @include maxquery(640px) {
        width: calc(100% - 32px);
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }

  // works
  .works-holder {
    position: relative;
    display: table;
    overflow: hidden;

    .work {
      position: relative;
      display: table;
      overflow: visible;
      width: 33.3333%;
      height: auto;
      min-height: 400px;
      padding: 0px;
      float: left;

      @include maxquery(992px) {
        width: calc(50% - 32px);
      }
      @include maxquery(768px) {
        width: calc(100% - 32px);
      }

      .content {
        position: absolute;
        display: block;
        width: 100%;
        height: auto;
        font-size: 14px;
        margin: 0px;
        line-height: 18px;
        top: 50%;
        left: -16px;
        transform: translate(0%, -50%);
        opacity: 0;
        visibility: hidden;
        text-align: center;
        transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);

        p {
          font-size: 16px;
          line-height: 20px;
          padding: 0px;
          margin: 0px;
          padding-bottom: 16px;

          span {
            font-size: 10px;
          }

          &.copyright {
            line-height: 14px;
          }
        }

        a {
          color: #363636;
          text-decoration: none;
        }

        h2 {
          font-family: 'Open Sans', sans-serif;
        }

        .content__company {
          font-size: 20px;
          text-decoration: underline dotted;
        }

        .content__project {
          text-decoration: underline;
        }
      }

      img {
        &.logo {
          max-height: 60%;
          max-width: 85%;
          width: auto;
          height: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          z-index: -1;
          transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);
          opacity: 1;
          visibility: visible;
        }
      }

      .logo-bg-holder {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;

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
          box-shadow: 0 0 36px rgba(0, 0, 0, 0.15), 0 0 36px rgba(0, 0, 0, 0.05);
          transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);

          &.work-oval-big {
            width: 450px;
            height: 390px;
            background: #a5d6a7;
            transform: translate(-50%, -50%);
            z-index: -3;
            opacity: 0;
            visibility: hidden;
          }

          &.work-oval-small {
            width: 390px;
            height: 360px;
            background: #a5d6a7;
            transform: translate(-50%, -50%);
            z-index: -2;
            opacity: 0;
            visibility: hidden;
          }

          &.work-circle {
            width: 320px;
            height: 310px;
            background: #a5d6a7;
            transform: translate(-50%, -50%);
            z-index: -1;
            opacity: 0;
            visibility: hidden;
          }
        }
      }

      &:hover {
        .content {
          left: 0px;
          opacity: 1;
          visibility: visible;
        }

        img {
          &.logo {
            opacity: 0;
            visibility: hidden;
          }
        }

        .logo-bg-holder {
          .logo-bg {
            &.work-oval-big {
              transform: scale(1) translate(-50%, -50%);
              opacity: 0.25;
              visibility: visible;
            }

            &.work-oval-small {
              transform: scale(1) translate(-50%, -50%);
              opacity: 0.45;
              visibility: visible;
            }

            &.work-circle {
              transform: scale(1) translate(-50%, -50%);
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
  }
}
</style>
