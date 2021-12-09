export default {
  methods: {
    randomInteger (min, max) {
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand)

      return rand
    }
  }
}
