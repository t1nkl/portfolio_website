export const vueWordCloudRotationItems = () => {
  const svgNS = 'http://www.w3.org/2000/svg'

  return [
    {
      value: function () {
        return 0
      },
      svg: (function () {
        const div = document.createElement('div')
        div.appendChild(
          (function () {
            const svg = document.createElementNS(svgNS, 'svg')
            svg.setAttribute('viewBox', '0 0 12 12')
            svg.appendChild(
              (function () {
                const path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                return path
              })()
            )
            return svg
          })()
        )
        return URL.createObjectURL(new Blob([div.innerHTML]))
      })()
    },
    {
      value: function (word: string) {
        const chance = Math.floor(Math.random() * word.length)
        return [0, 3 / 4][chance % 2]
      },
      svg: (function () {
        const div = document.createElement('div')
        div.appendChild(
          (function () {
            const svg = document.createElementNS(svgNS, 'svg')
            svg.setAttribute('viewBox', '0 0 12 12')
            svg.appendChild(
              (function () {
                const path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                return path
              })()
            )
            svg.appendChild(
              (function () {
                const path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(90 6 6)')
                return path
              })()
            )
            return svg
          })()
        )
        return URL.createObjectURL(new Blob([div.innerHTML]))
      })()
    },
    {
      value: function (word: string) {
        const chance = Math.floor(Math.random() * word.length)
        return [0, 1 / 8, 3 / 4, 7 / 8][chance % 4]
      },
      svg: (function () {
        const div = document.createElement('div')
        div.appendChild(
          (function () {
            const svg = document.createElementNS(svgNS, 'svg')
            svg.setAttribute('viewBox', '0 0 12 12')
            svg.appendChild(
              (function () {
                const path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                return path
              })()
            )
            svg.appendChild(
              (function () {
                const path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(45 6 6)')
                return path
              })()
            )
            svg.appendChild(
              (function () {
                const path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(90 6 6)')
                return path
              })()
            )
            svg.appendChild(
              (function () {
                const path = document.createElementNS(svgNS, 'path')
                path.setAttribute('d', 'M0 7 L0 5 L12 5 L12 7 Z')
                path.setAttribute('transform', 'rotate(315 6 6)')
                return path
              })()
            )
            return svg
          })()
        )
        return URL.createObjectURL(new Blob([div.innerHTML]))
      })()
    },
    {
      value: function (word: string) {
        return Math.floor(Math.random() * word.length)
      },
      svg: (function () {
        const div = document.createElement('div')
        div.appendChild(
          (function () {
            const svg = document.createElementNS(svgNS, 'svg')
            svg.setAttribute('viewBox', '0 0 2 2')
            svg.appendChild(
              (function () {
                const circle = document.createElementNS(svgNS, 'circle')
                circle.setAttribute('cx', String(1))
                circle.setAttribute('cy', String(1))
                circle.setAttribute('r', String(1))
                return circle
              })()
            )
            return svg
          })()
        )
        return URL.createObjectURL(new Blob([div.innerHTML]))
      })()
    }
  ]
}
