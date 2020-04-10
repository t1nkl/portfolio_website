<template>
  <div class="author-holder fade-component">
    <h1>
      Every. Word.
      <vue-typer
        :erase-delay="100"
        :erase-on-complete="false"
        :pre-erase-delay="2000"
        :pre-type-delay="70"
        :repeat="0"
        :shuffle="false"
        :text="['Matters', 'Important', 'Reload Page', 'FKING AMAZING']"
        :type-delay="70"
        caret-animation="phase"
        erase-style="backspace"
        initial-action="typing"
      >
      </vue-typer>
      .
    </h1>

    <h2 class="divider-line fade-component"><span>MORE</span></h2>

    <div style="margin-top:-3vh;height: 110vh;position: relative;width: 100%;">
      <div
        style="bottom: 0;left: 0;position: absolute;right: 0;top: 0;transition-duration: 1s;"
      >
        <vue-word-cloud
          :animation-duration="5000"
          :animation-easing="'ease-in'"
          :animation-overlap="0"
          :color="color"
          :font-family="fontFamily"
          :rotation="rotation"
          :spacing="1 / 5"
          :words="words"
        >
        </vue-word-cloud>
      </div>
    </div>
  </div>
</template>

<script>
import VueWordCloud from "vuewordcloud";

export default {
  name: "Skills",
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
  data: () => ({
    words: [],
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
    fontFamily: undefined,
    fontFamilyValues: ["Finger Paint", "Fredericka the Great"],
    rotationItemIndex: undefined,
    rotationItems: [
      {
        value: 0,
        svg: (function() {
          var svgNS = "http://www.w3.org/2000/svg";
          var div = document.createElement("div");

          div.appendChild(
            (function() {
              var svg = document.createElementNS(svgNS, "svg");
              svg.setAttribute("viewBox", "0 0 12 12");

              svg.appendChild(
                (function() {
                  var path = document.createElementNS(svgNS, "path");
                  path.setAttribute("d", "M0 7 L0 5 L12 5 L12 7 Z");

                  return path;
                })()
              );

              return svg;
            })()
          );

          return URL.createObjectURL(new Blob([div.innerHTML]));
        })(),
      },
      {
        value: function(word) {
          // eslint-disable-next-line
          var chance = new Chance(word[0]); /* eslint-disable */

          return chance.pickone([0, 3 / 4]); /* eslint-disable */
        },
        svg: (function() {
          var svgNS = "http://www.w3.org/2000/svg";
          var div = document.createElement("div");

          div.appendChild(
            (function() {
              var svg = document.createElementNS(svgNS, "svg");
              svg.setAttribute("viewBox", "0 0 12 12");

              svg.appendChild(
                (function() {
                  var path = document.createElementNS(svgNS, "path");
                  path.setAttribute("d", "M0 7 L0 5 L12 5 L12 7 Z");

                  return path;
                })()
              );

              svg.appendChild(
                (function() {
                  var path = document.createElementNS(svgNS, "path");
                  path.setAttribute("d", "M0 7 L0 5 L12 5 L12 7 Z");
                  path.setAttribute("transform", "rotate(90 6 6)");

                  return path;
                })()
              );

              return svg;
            })()
          );

          return URL.createObjectURL(new Blob([div.innerHTML]));
        })(),
      },
      {
        value: function(word) {
          var chance = new Chance(word[0]); /* eslint-disable */

          return chance.pickone([0, 1 / 8, 3 / 4, 7 / 8]); /* eslint-disable */
        },
        svg: (function() {
          var svgNS = "http://www.w3.org/2000/svg";
          var div = document.createElement("div");

          div.appendChild(
            (function() {
              var svg = document.createElementNS(svgNS, "svg");
              svg.setAttribute("viewBox", "0 0 12 12");

              svg.appendChild(
                (function() {
                  var path = document.createElementNS(svgNS, "path");
                  path.setAttribute("d", "M0 7 L0 5 L12 5 L12 7 Z");

                  return path;
                })()
              );

              svg.appendChild(
                (function() {
                  var path = document.createElementNS(svgNS, "path");
                  path.setAttribute("d", "M0 7 L0 5 L12 5 L12 7 Z");
                  path.setAttribute("transform", "rotate(45 6 6)");

                  return path;
                })()
              );

              svg.appendChild(
                (function() {
                  var path = document.createElementNS(svgNS, "path");
                  path.setAttribute("d", "M0 7 L0 5 L12 5 L12 7 Z");
                  path.setAttribute("transform", "rotate(90 6 6)");

                  return path;
                })()
              );

              svg.appendChild(
                (function() {
                  var path = document.createElementNS(svgNS, "path");
                  path.setAttribute("d", "M0 7 L0 5 L12 5 L12 7 Z");
                  path.setAttribute("transform", "rotate(315 6 6)");

                  return path;
                })()
              );

              return svg;
            })()
          );

          return URL.createObjectURL(new Blob([div.innerHTML]));
        })(),
      },
    ],
  }),
  methods: {
    fetchData() {
      this.words = [
        ["Laravel", 10],
        ["Vue.js", 9],
        ["PostgreSQL", 8],
        ["MySQL", 7],
        ["PHP", 7],
        ["Redis", 6],
        ["Memcached", 6],
        ["ElasticSearch", 5],
        ["Docker", 5],
        ["Lumen", 10],
        ["RESTful API", 4],
        ["Composer", 4],
        ["Git", 4],
        ["DRY", 4],
        ["S.O.L.I.D.", 4],
        ["SPA", 4],
        ["React", 4],
        ["Redux", 4],
        ["Vuex", 4],
        ["GraphQL", 4],
        ["Tailwind CSS", 3],
        ["Axios", 3],
        ["Ajax", 3],
        ["Apache", 3],
        ["Nginx", 3],
        ["OOP", 3],
        ["MVC", 3],
        ["CORS", 3],
        ["Digital Ocean", 3],
        ["jQuery", 2],
        ["JavaScript", 2],
        ["CSS", 1],
        ["Bootstrap", 1],
        ["HTML", 1],
      ];
    },
  },
  computed: {
    rotation: function() {
      var item = this.rotationItems[this.rotationItemIndex];

      return item && item.value;
    },
    color: function() {
      return (word) => {
        switch (word[1]) {
          case 10:
            return "#e74430";
          case 9:
            return "#4fc08d";
          default:
            return this.colorItems[
              this.randomInteger(0, this.colorItems.length - 1)
            ];
        }
      };
    },
  },
  watch: {
    $route(to, from) {
      this.fontFamily = undefined;
      this.rotationItemIndex = undefined;

      this.fetchData();
      this.fontFamily = chance.pickone(
        this.fontFamilyValues
      ); /* eslint-disable */
      this.rotationItemIndex = chance.integer({
        /* eslint-disable */
        min: 0,
        max: this.rotationItems.length - 1,
      });
    },
  },
  created: function() {
    this.fetchData();
    this.fontFamily = chance.pickone(
      this.fontFamilyValues
    ); /* eslint-disable */
    this.rotationItemIndex = chance.integer({
      /* eslint-disable */
      min: 0,
      max: this.rotationItems.length - 1,
    });
  },
};
</script>

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

.author-holder {
  // social
  .social {
    ul {
      position: relative;
      overflow: hidden;
      list-style-type: none;
      text-align: center;
      float: none;
      padding: 0;
      width: calc(100% + 1.5rem);
      @include maxquery(640px) {
        width: 100%;
      }

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
            font-family: "Cardo", serif;
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
              box-shadow: 0 0 36px rgba(0, 0, 0, 0.15),
                0 0 36px rgba(0, 0, 0, 0.005);
              transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);

              &.social-oval-big {
                width: 72px;
                height: 64px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -3;
                opacity: 0.25;
              }

              &.social-oval-small {
                width: 54px;
                height: 62px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -2;
                opacity: 0.45;
              }

              &.social-circle {
                width: 94px;
                height: 94px;
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
