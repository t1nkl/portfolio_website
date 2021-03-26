<template>
  <div>
    <div class="life-holder fade-component">
      <h1>Every. Point. Important.</h1>

      <h2 class="divider-line fade-component"><span>MORE</span></h2>

      <div class="content">
        <ul class="timeline">
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">January 2020</p>
              <h3>Boosteroid</h3>
              <h4>Laravel Developer</h4>
              <p>In the process.</p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">March 2019</p>
              <h3>PaymentWall Inc.</h3>
              <h4>Laravel Developer (Full Stack)</h4>
              <p>Classified.</p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">
                December 2017
              </p>
              <h3>CF.Digital</h3>
              <h4>Laravel Developer (Full Stack)</h4>
              <p>Creation of websites, e-commerce, CMS.</p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">October 2017</p>
              <h3>Intraweb Agency</h3>
              <h4>Laravel Developer (Full Stack)</h4>
              <p>
                Refinement, add new functionality and optimization of
                international platform.
              </p>
            </div>
          </li>
          <li class="timeline-event">
            <label class="timeline-event-icon"></label>
            <div class="timeline-event-copy">
              <p class="timeline-event-thumbnail">March 2016</p>
              <h3>LeoDigital</h3>
              <h4>PHP/Laravel Developer</h4>
              <p>
                Refinement, add new functionality, bug fixes and optimization
                different websites.<br/>Creation of websites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Life',
  data: () => ({
    //
  }),
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}

.timeline {
  margin: 4em auto;
  position: relative;
  max-width: 46em;
}

.timeline:before {
  background-color: black;
  content: "";
  margin-left: 5px;
  position: absolute;
  top: 0;
  left: 2em;
  width: 3px;
  height: 100%;
}

.timeline-event {
  position: relative;
}

.timeline-event:hover .timeline-event-icon {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #436e45;
}

.timeline-event:hover .timeline-event-thumbnail {
  -moz-box-shadow: inset 40em 0 0 0 #436e45;
  -webkit-box-shadow: inset 40em 0 0 0 #436e45;
  box-shadow: inset 40em 0 0 0 #436e45;
}

.timeline-event-copy {
  padding-top: 1em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.1em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;
}

.timeline-event-copy h3 {
  font-size: 1.75em;
}

.timeline-event-copy h4 {
  font-size: 1.2em;
  margin-bottom: 1.2em;
}

.timeline-event-copy strong {
  font-weight: 700;
}

.timeline-event-copy p:not(.timeline-event-thumbnail) {
  padding-bottom: 1.2em;
}

.timeline-event-icon {
  -moz-transition: -moz-transform 0.2s ease-in;
  -o-transition: -o-transform 0.2s ease-in;
  -webkit-transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: black;
  outline: 10px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  -moz-transition: box-shadow 0.5s ease-in 0.1s;
  -o-transition: box-shadow 0.5s ease-in 0.1s;
  -webkit-transition: box-shadow 0.5s ease-in;
  -webkit-transition-delay: 0.1s;
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 0.75em;
  background-color: black;
  -moz-box-shadow: inset 0 0 0 0em #c8e6c9;
  -webkit-box-shadow: inset 0 0 0 0em #c8e6c9;
  box-shadow: inset 0 0 0 0em #c8e6c9;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}
</style>
