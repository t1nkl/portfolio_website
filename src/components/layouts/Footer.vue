<template>
  <div v-if="$route.name !== 'api.index_page'" class="footer fade-component">
    <h2 class="divider"><span></span></h2>
    <div class="footer-inner">
      <div class="copyright">
        &copy; With &#9829; on Vue.js & GSAP by t1nkl /
        <a href="https://github.com/t1nkl/Portfolio-Website" target="_blank"
        >GITHUB THIS</a
        >
      </div>
      <div class="extra">
        <ul>
          <li>
            <router-link :to="'/skills'" exact> skills<span>.</span></router-link>
          </li>
          <li>
            <router-link :to="'/works'" exact> works<span>.</span></router-link>
          </li>
          <li>
            <router-link :to="'/life'" exact> life<span>.</span></router-link>
          </li>
          <li>
            <router-link :to="'/contact'" exact> contact<span>.</span></router-link>
          </li>
        </ul>
        <ul>
          <li>
            <a class="green" href="mailto:kyryll.kovalenko@gmail.com">
              <strong>kyryll.kovalenko@gmail.com</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
.footer {
  position: relative;
  display: block;
  width: 100%;

  .footer-inner {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    padding: 32px 0;
    overflow: hidden;
    font-size: 16px;
    color: #cccccc;
    text-align: center;

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        padding-right: 0.75rem;

        a {
          font-family: "Cardo", serif;
          font-size: 14px;
          font-weight: 300;

          &.green {
            color: #a5d6a7 !important;
          }
        }
      }
    }
  }
}
</style>
