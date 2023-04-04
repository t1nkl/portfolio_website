<script setup lang="ts"></script>

<template>
  <footer class="footer fade-component">
    <h2 class="divider"><span></span></h2>
    <div class="footer-inner">
      <div class="copyright">
        &copy; With &#9829; on Vue.js & GSAP by t1nkl /
        <a href="https://github.com/t1nkl/Portfolio-Website" target="_blank">GITHUB THIS</a>
      </div>
      <div class="extra">
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
        <ul>
          <li>
            <a class="green" href="mailto:kyryll.kovalenko@gmail.com">
              <strong>kyryll.kovalenko@gmail.com</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
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

    .copyright {
      font-family: 'Open Sans', serif;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        padding-right: 0.75rem;

        a {
          font-family: 'Open Sans', serif;
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
