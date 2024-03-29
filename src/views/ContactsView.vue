<script setup lang="ts">
import TextMorph from '@/components/animations/TextMorph.vue'
</script>

<template>
  <div>
    <div class="contact-holder fade-component">
      <TextMorph
        :static-words="''"
        :dynamic-words="['Every.', 'Question.', 'Matters.']"
        :text-align="'left'"
      />

      <div class="content">
        <p>Some cool text will be here in future...</p>
        <br />
        <p>
          In the meantime, you can see my
          <a href="/cv/Kyryll_Kovalenko_CV.pdf" target="_blank"><b>CV</b></a>
        </p>
      </div>

      <h2 class="divider-line fade-component"><span>contacts</span></h2>

      <div class="social">
        <ul>
          <li>
            <a href="https://www.facebook.com/t1nkl/" target="_blank">
              <div class="logo-bg-holder">
                <div class="logo-bg social-oval-big rotating-slow"></div>
              </div>
              <span>face</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/t1nkl/" target="_blank">
              <div class="logo-bg-holder">
                <div class="logo-bg social-circle rotating-fast"></div>
              </div>
              <span>linked</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/t1nkl/" target="_blank">
              <div class="logo-bg-holder">
                <div class="logo-bg social-oval-small rotating-slow"></div>
              </div>
              <span>git</span>
            </a>
          </li>
        </ul>
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

.contact-holder {
  // social
  .social {
    ul {
      position: relative;
      overflow: hidden;
      list-style-type: none;
      text-align: center;
      float: none;
      padding: 0;
      width: 100%;

      li {
        position: relative;
        display: inline-block;
        float: none;
        width: 114px;
        height: 114px;
        text-align: center;
        margin: 16px 1.5rem;

        @include maxquery(640px) {
          width: 100%;
          margin: 16px 0;
        }

        a {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          opacity: 1;
          transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);

          img {
            position: absolute;
            display: block;
            top: 50%;
            transform: translateY(-50%);
          }

          &:hover {
            opacity: 1;
          }

          span {
            position: absolute;
            display: block;
            width: auto;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            line-height: 114px;
            text-align: center;
            font-family: 'Finger Paint', serif;
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
              box-shadow: 0 0 36px rgba(0, 0, 0, 0.15), 0 0 36px rgba(0, 0, 0, 0.005);
              transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);

              &.social-oval-big {
                width: 84px;
                height: 62px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -3;
                opacity: 0.25;
              }

              &.social-oval-small {
                width: 82px;
                height: 74px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -2;
                opacity: 0.45;
              }

              &.social-circle {
                width: 124px;
                height: 104px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -1;
              }
            }
          }
        }

        &:nth-child(1) {
          width: 72px;
        }

        &:nth-child(3) {
          width: 92px;
        }
      }
    }
  }

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

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotating {
  from {
    -ms-transform: translate(-50%, -50%) rotate(0deg);
    -moz-transform: translate(-50%, -50%) rotate(0deg);
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -ms-transform: translate(-50%, -50%) rotate(360deg);
    -moz-transform: translate(-50%, -50%) rotate(360deg);
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
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
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
    -o-transform: translate(-50%, -50%) rotate(-360deg);
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes rotating-inverse {
  from {
    -ms-transform: translate(-50%, -50%) rotate(0deg);
    -moz-transform: translate(-50%, -50%) rotate(0deg);
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -ms-transform: translate(-50%, -50%) rotate(-360deg);
    -moz-transform: translate(-50%, -50%) rotate(-360deg);
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
    -o-transform: translate(-50%, -50%) rotate(-360deg);
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

.rotating-slow {
  -webkit-animation: rotating-inverse 16s linear infinite;
  -moz-animation: rotating-inverse 16s linear infinite;
  -ms-animation: rotating-inverse 16s linear infinite;
  -o-animation: rotating-inverse 16s linear infinite;
  animation: rotating-inverse 16s linear infinite;
}
</style>
