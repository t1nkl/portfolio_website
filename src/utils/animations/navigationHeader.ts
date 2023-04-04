import { Back, Expo, gsap } from 'gsap'
import { ref } from 'vue'

export function navigationHeader(): void {
  const timeline = gsap.timeline()
  const headerOvalBig = ref<HTMLElement | null>(null)
  const headerOvalSmall = ref<HTMLElement | null>(null)

  if (headerOvalBig.value) {
    headerOvalBig.value.classList.remove('rotating-fast')
  }

  if (headerOvalSmall.value) {
    headerOvalSmall.value.classList.remove('rotating-slow')
  }

  timeline.set('#header_circle', {
    scale: 0,
    z: 0.01
  })

  timeline.set('#header_oval-small', {
    autoAlpha: 0,
    scale: 0,
    z: 0.01
  })

  timeline.set('#header_oval-big', {
    autoAlpha: 0,
    scale: 0,
    z: 0.01
  })

  timeline.set('#header_logo-txt', {
    autoAlpha: 0,
    z: 0.01
  })

  timeline.set('#header_main-navigation', {
    autoAlpha: 0,
    z: 0.01
  })

  timeline.fromTo(
    '#header_circle',
    3,
    {
      scale: 0,
      transformOrigin: '50% 50%'
    },
    {
      force3D: true,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Back.easeOut.config(2.25)
    }
  )

  timeline.fromTo(
    '#header_oval-small',
    2.5,
    {
      autoAlpha: 0,
      scale: 0,
      transformOrigin: '50% 50%'
    },
    {
      force3D: true,
      autoAlpha: 0.45,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Back.easeOut.config(2.25)
    },
    '-=2.25'
  )

  timeline.fromTo(
    '#header_oval-big',
    2.5,
    {
      autoAlpha: 0,
      scale: 0,
      transformOrigin: '50% 50%'
    },
    {
      force3D: true,
      autoAlpha: 0.25,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Back.easeOut.config(2.25)
    },
    '-=2.25'
  )

  timeline.fromTo(
    '#header_logo-txt',
    2.5,
    { autoAlpha: 0, x: -80 },
    {
      autoAlpha: 1,
      x: 0,
      ease: Expo.easeOut
    },
    '-=2.65'
  )

  timeline.fromTo(
    '#header_main-navigation',
    2.5,
    { autoAlpha: 0, x: -80 },
    {
      autoAlpha: 1,
      x: 0,
      ease: Expo.easeOut
    },
    '-=2.5'
  )

  setTimeout(() => {
    if (headerOvalBig.value) {
      headerOvalBig.value.classList.add('rotating-fast')
    }

    if (headerOvalSmall.value) {
      headerOvalSmall.value.classList.add('rotating-slow')
    }
  }, 2000)
}
