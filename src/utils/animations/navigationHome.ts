import { Back, Expo, gsap } from 'gsap'

export function navigationHome(): void {
  const timeline = gsap.timeline()

  timeline.set('#index_circle', {
    scale: 0,
    z: 0.01
  })

  timeline.set('#index_oval-small', {
    autoAlpha: 0,
    scale: 0,
    z: 0.01
  })

  timeline.set('#index_oval-big', {
    autoAlpha: 0,
    scale: 0,
    z: 0.01
  })

  timeline.set('#index_logo-txt', {
    autoAlpha: 0,
    z: 0.01
  })

  timeline.set('#index_custom-navigation', {
    autoAlpha: 0,
    z: 0.01
  })

  timeline.fromTo(
    '#index_circle',
    3,
    { scale: 0, transformOrigin: '50% 50%' },
    {
      force3D: true,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Back.easeOut.config(2.25)
    }
  )

  timeline.fromTo(
    '#index_oval-small',
    2.5,
    {
      autoAlpha: 0,
      scale: 0,
      transformOrigin: '50% 50%'
    },
    {
      force3D: true,
      autoAlpha: 1,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Back.easeOut.config(2.25)
    },
    '-=2.25'
  )

  timeline.fromTo(
    '#index_oval-big',
    2.5,
    {
      autoAlpha: 0,
      scale: 0,
      transformOrigin: '50% 50%'
    },
    {
      force3D: true,
      autoAlpha: 1,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Back.easeOut.config(2.25)
    },
    '-=2.25'
  )

  timeline.fromTo(
    '#index_logo-txt',
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
    '#index_custom-navigation',
    2.5,
    { autoAlpha: 0, x: -80 },
    {
      autoAlpha: 1,
      x: 0,
      ease: Expo.easeOut
    },
    '-=2.45'
  )
}
