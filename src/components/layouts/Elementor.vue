<template>
  <div>
    <header-layout></header-layout>

    <transition mode="out-in" name="page">
      <router-view></router-view>
    </transition>

    <footer-layout></footer-layout>
  </div>
</template>

<script>
import headerLayout from "./Header";
import footerLayout from "./Footer";

export default {
  name: "Elementor",
  components: {
    "header-layout": headerLayout,
    "footer-layout": footerLayout,
  },
  data: () => ({}),
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

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

// variables
$black: #363636;
// common
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  background-size: cover;
  background-position: center center;
  min-height: 100%;
  min-height: 100vh;
  -webkit-transition: background-color 0.45s ease-in-out;
  -moz-transition: background-color 0.45s ease-in-out;
  transition: background-color 0.45s ease-in-out;
}

// styles
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  color: $black;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  // main navigation
  nav {
    font-family: "Cardo", serif;

    .router-link-active {
      font-weight: 700;
    }
  }

  // headlines
  h1 {
    font-family: "Cardo", serif;
    font-size: 36px;
    line-height: 46px;
    font-weight: 400;
  }

  h2 {
    width: 100% !important;
    position: relative;
    display: block;
    float: none;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    text-transform: uppercase;
    margin-top: 12px;
    padding: 0 !important;
    // divider line
    &.divider-line {
      position: relative;
      font-size: 14px;
      font-weight: 300;

      span {
        position: relative;
        color: #ccc;
        letter-spacing: 2px;

        &:before,
        &:after {
          content: "";
          border-top: 1px solid #ccc;
          opacity: 0.45;
          width: 100%;
          width: 100vw;
          position: absolute;
          top: 51%;
        }

        &:before {
          right: calc(100% + 1.5rem);
        }

        &:after {
          left: calc(100% + 1.5rem);
        }
      }
    }

    // divider
    &.divider {
      position: relative;
      font-size: 14px;
      font-weight: 300;

      span {
        position: relative;
        color: #ccc;
        letter-spacing: 2px;

        &:before,
        &:after {
          content: "";
          border-top: 1px solid #ccc;
          opacity: 0.45;
          width: 100%;
          width: 100vw;
          position: absolute;
          top: 51%;
        }

        &:before {
          right: 0;
        }

        &:after {
          left: 0;
        }
      }
    }
  }

  // styles
  .through {
    text-decoration: line-through;
  }

  a {
    text-decoration: none;
    color: $black;
    transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);

    &:hover {
      // color: #a5d6a7 !important;
    }
  }

  // components
  .fade-component {
    width: 100%;
  }
}

// page transitions
.fade-enter-active,
.fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<style>
/* latin */
@font-face {
  font-family: "Finger Paint";
  font-style: normal;
  font-weight: 400;
  src: local("Finger Paint Regular"), local("FingerPaint-Regular"),
    url(https://fonts.gstatic.com/s/fingerpaint/v8/0QInMXVJ-o-oRn_7dron8YW-9JzT0gBOsg.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: "Fredericka the Great";
  font-style: normal;
  font-weight: 400;
  src: local("Fredericka the Great"), local("FrederickatheGreat"),
    url(https://fonts.gstatic.com/s/frederickathegreat/v7/9Bt33CxNwt7aOctW2xjbCstzwVKsIBVV--SjxbcHcQ2K.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* greek-ext */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 400;
  src: local("Cardo"), local("Cardo-Regular"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlp_gwjKBV1pqhv03IE7225PUCk.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}

/* greek */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 400;
  src: local("Cardo"), local("Cardo-Regular"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlp_gwjKBV1pqhv73IE7225PUCk.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}

/* latin-ext */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 400;
  src: local("Cardo"), local("Cardo-Regular"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlp_gwjKBV1pqhv23IE7225PUCk.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 400;
  src: local("Cardo"), local("Cardo-Regular"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlp_gwjKBV1pqhv43IE7225P.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* greek-ext */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 700;
  src: local("Cardo Bold"), local("Cardo-Bold"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlpygwjKBV1pqhND-ZQa-WNlaiBWM_I.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}

/* greek */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 700;
  src: local("Cardo Bold"), local("Cardo-Bold"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlpygwjKBV1pqhND-ZQV-WNlaiBWM_I.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}

/* latin-ext */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 700;
  src: local("Cardo Bold"), local("Cardo-Bold"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlpygwjKBV1pqhND-ZQY-WNlaiBWM_I.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: "Cardo";
  font-style: normal;
  font-weight: 700;
  src: local("Cardo Bold"), local("Cardo-Bold"),
    url(https://fonts.gstatic.com/s/cardo/v10/wlpygwjKBV1pqhND-ZQW-WNlaiBW.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  src: local("Montserrat Light"), local("Montserrat-Light"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_cJD3gTD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  src: local("Montserrat Light"), local("Montserrat-Light"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_cJD3g3D_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  src: local("Montserrat Light"), local("Montserrat-Light"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_cJD3gbD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  src: local("Montserrat Light"), local("Montserrat-Light"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_cJD3gfD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  src: local("Montserrat Light"), local("Montserrat-Light"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_cJD3gnD_vx3rCs.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: local("Montserrat Regular"), local("Montserrat-Regular"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: local("Montserrat Regular"), local("Montserrat-Regular"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: local("Montserrat Regular"), local("Montserrat-Regular"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: local("Montserrat Regular"), local("Montserrat-Regular"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: local("Montserrat Regular"), local("Montserrat-Regular"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gTD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3g3D_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gbD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gfD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  src: local("Montserrat Black"), local("Montserrat-Black"),
    url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gnD_vx3rCs.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>
