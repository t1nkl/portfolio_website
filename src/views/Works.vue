<template>
  <div>
    <div class="works-common-holder fade-component">
      <h1>
        Every. Project.
        <vue-typer
          :erase-delay="100"
          :erase-on-complete="false"
          :pre-erase-delay="2000"
          :pre-type-delay="70"
          :repeat="0"
          :shuffle="false"
          :text="['Incredible', 'Amazing', 'Important']"
          :type-delay="70"
          caret-animation="phase"
          erase-style="backspace"
          initial-action="typing"
        >
        </vue-typer>
        .
      </h1>

      <div class="content">
        <p>You think so, huh?.</p>
      </div>
    </div>

    <h2 class="divider-line fade-component"><span>MORE</span></h2>

    <div class="works-holder fade-component">
      <div
        :data-image="getColor()"
        :key="work.title"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        class="work"
        v-for="work in works"
      >
        <v-lazy-image
          :alt="'t1nkl - Web Developer - Works - ' + work.title"
          :src="work.image"
          class="logo"
          src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
        />

        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFFFFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFFFFF !important"
          ></div>
          <div
            class="logo-bg work-circle"
            style="background-color: #FFFFFF !important"
          ></div>
        </div>

        <div class="content">
          <h2>{{ work.title }}</h2>
          <p :key="content.key" v-for="content in work.content">
            <strong>{{ content.key }}</strong>
            <br />
            <span style="font-size:20px" v-html="content.value"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import $ from "jquery";

export default {
  name: "Works",
  data: () => ({
    timeline: new TimelineMax({ paused: true }),
    works: [],
    colorItems: [
      "#ff3366",
      "#ff6633",
      "#FFCC33",
      "#33FF66",
      "#33FFCC",
      "#33CCFF",
      "#3366FF",
      "#6633FF",
      "#CC33FF",
    ],
  }),
  methods: {
    getColor() {
      return this.colorItems[this.randomInteger(0, this.colorItems.length - 1)];
    },
    over(event) {
      let dataImage = event.target.dataset.image;
      $("body").attr("style", "background-color: " + dataImage);
    },
    leave() {
      $("body").attr("style", "background-color: #FFFFFF");
    },
    fetchData() {
      this.works = [
        {
          title: "SARS-COV-2 Statistics",
          image: "/img/works/sars-cov-2-app.png",
          color: "#027d2d",
          content: [
            { key: "TYPE", value: "Website" },
            { key: "STACK", value: "Vue.js (Vue SLI 3)" },
            {
              key: "LIVE",
              value:
                '<a href="https://sars-cov-2-app.web.app" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Samsonite",
          image: "/img/works/samsonite.jpg",
          color: "#f2c849",
          content: [
            { key: "TYPE", value: "E-Commerce" },
            { key: "STACK", value: "Delta CMS" },
            {
              key: "LIVE",
              value: '<a href="https://samsonite.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Solente",
          image: "/img/works/solente.jpg",
          color: "#9c9d9e",
          content: [
            { key: "TYPE", value: "Catalog" },
            { key: "STACK", value: "Delta CMS" },
            {
              key: "LIVE",
              value: '<a href="https://solente.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Julia Chulska",
          image: "/img/works/chulska.jpg",
          color: "#D22C22",
          content: [
            { key: "TYPE", value: "Portfolio" },
            { key: "STACK", value: "Delta CMS" },
            {
              key: "LIVE",
              value: '<a href="https://chulska.com" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Delta CMS",
          image: "/img/works/delta.jpg",
          color: "#027d2d",
          content: [
            { key: "TYPE", value: "CMS" },
            {
              key: "STACK",
              value:
                "Laravel - Vue.js - SPA - Tailwind.css - ElementUI - Redis - PostgreSQL",
            },
            {
              key: "LIVE",
              value:
                '<a href="http://lara.deltacms.com.ua/auth/login" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "UltraGroup",
          image: "/img/works/ultragroup.jpg",
          color: "#62bbc1",
          content: [
            { key: "TYPE", value: "Corporate" },
            { key: "STACK", value: "Laravel" },
            {
              key: "LIVE",
              value:
                '<a href="https://ultragroup.com.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Imperium Investments",
          image: "/img/works/imperium.jpg",
          color: "#178ED3",
          content: [
            { key: "TYPE", value: "Corporate" },
            { key: "STACK", value: "Laravel" },
            {
              key: "LIVE",
              value:
                '<a href="http://imperiuminvestments.co.uk" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "L'Oreal",
          image: "/img/works/loreal.jpg",
          color: "#7ac3db",
          content: [
            { key: "TYPE", value: "Event" },
            { key: "STACK", value: "Laravel - Vue.js" },
            {
              key: "LIVE",
              value:
                '<a href="http://loreal.cf.digital" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "CatChat",
          image: "/img/works/catchat.jpg",
          color: "#777777",
          content: [
            { key: "TYPE", value: "Goods" },
            { key: "STACK", value: "Laravel" },
            {
              key: "LIVE",
              value: '<a href="http://catchat.life" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Puzata Hata",
          image: "/img/works/puzatahata.jpg",
          color: "#ED7102",
          content: [
            { key: "TYPE", value: "Corporate" },
            { key: "STACK", value: "Laravel" },
            {
              key: "LIVE",
              value: '<a href="http://puzatahata.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "VESNAmedia",
          image: "/img/works/vesnamedia.jpg",
          color: "#D22C22",
          content: [
            { key: "TYPE", value: "News" },
            {
              key: "STACK",
              value: "Laravel - Bootstrap - jQuery - Slick - Modernizr",
            },
            {
              key: "LIVE",
              value:
                '<a href="https://www.vesnamedia.com" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Barometer",
          image: "/img/works/barometer.jpg",
          color: "#f2c849",
          content: [
            { key: "TYPE", value: "Event" },
            {
              key: "STACK",
              value: "Laravel - Bootstrap - Css3 - jQuery - Vue.js - Lodash",
            },
            {
              key: "LIVE",
              value:
                '<a href="http://2017.barometer.show" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Harveast Portal",
          image: "/img/works/harvest.jpg",
          color: "#027d2d",
          content: [
            { key: "TYPE", value: "CRM" },
            { key: "STACK", value: "Laravel - Css3 - jQuery - Vue.js" },
            {
              key: "LIVE",
              value:
                '<a href="http://portal.harveast.com.ua/login" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Skydiving Center",
          image: "/img/works/skydiving.jpg",
          color: "#9c9d9e",
          content: [
            { key: "TYPE", value: "Corporate" },
            {
              key: "STACK",
              value: "Laravel - Css3 - jQuery - Vue.js - Moment.js - Polyfill",
            },
            {
              key: "LIVE",
              value:
                '<a href="http://skydiving.com.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Anna-Ki",
          image: "/img/works/annaki.jpg",
          color: "#62bbc1",
          content: [
            { key: "TYPE", value: "Corporate" },
            { key: "STACK", value: "Laravel - Bootstrap - jQuery" },
            {
              key: "LIVE",
              value: '<a href="http://annaki.com.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title:
            "\u0416\u041a \u0421\u0432\u044f\u0442\u043e\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u0438\u0439",
          image: "/img/works/svyatopetrovskyi.jpg",
          color: "#027d2d",
          content: [
            { key: "TYPE", value: "Corporate" },
            { key: "STACK", value: "Laravel - Bootstrap - jQuery" },
            {
              key: "LIVE",
              value:
                '<a href="http://www.sv-petrovskiy.kiev.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Chaikivskyi",
          image: "/img/works/chaikivskyi.jpg",
          color: "#ED7102",
          content: [
            { key: "TYPE", value: "Portfolio" },
            { key: "STACK", value: "Laravel - Css3 - jQuery" },
            { key: "NO LIVE", value: "Sorry" },
          ],
        },
        {
          title: "As Breus",
          image: "/img/works/asbreus.jpg",
          color: "#178ED3",
          content: [
            { key: "TYPE", value: "Portfolio" },
            {
              key: "STACK",
              value: "Laravel - Bootstrap - jQuery - FancyBox - OWL Carousel",
            },
            {
              key: "LIVE",
              value: '<a href="http://as-breus.com" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "Impire Tattoo",
          image: "/img/works/imperiatatu.jpg",
          color: "#f2c849",
          content: [
            { key: "TYPE", value: "Corporate" },
            { key: "STACK", value: "Laravel - Css3 - jQuery" },
            { key: "NO LIVE", value: "Sorry" },
          ],
        },
        {
          title: "Matrasik",
          image: "/img/works/matrasik.jpg",
          color: "#777777",
          content: [
            { key: "TYPE", value: "E-Commerce" },
            { key: "STACK", value: "WordPress" },
            {
              key: "LIVE",
              value:
                '<a href="https://matrasik.kiev.ua" target="_blank">VISIT</a>',
            },
          ],
        },
        {
          title: "LeoDigital",
          image: "/img/works/leodigital.jpg",
          color: "#D22C22",
          content: [
            { key: "TYPE", value: "Corporate" },
            { key: "STACK", value: "Laravel - Css3 - jQuery" },
            {
              key: "LIVE",
              value:
                '<a href="https://leodigital.com.ua" target="_blank">VISIT</a>',
            },
          ],
        },
      ];
    },
  },
  created: function() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>

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

// infos
.works-common-holder {
  .content {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
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
      width: 48.3333%;
      width: calc(50% - 32px);
    }
    @include maxquery(768px) {
      width: 98%;
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
          width: 400px;
          height: 360px;
          background: #a5d6a7;
          transform: translate(-50%, -50%);
          z-index: -3;
          opacity: 0;
          visibility: hidden;
        }

        &.work-oval-small {
          width: 300px;
          height: 340px;
          background: #a5d6a7;
          transform: translate(-50%, -50%);
          z-index: -2;
          opacity: 0;
          visibility: hidden;
        }

        &.work-circle {
          width: 260px;
          height: 260px;
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
