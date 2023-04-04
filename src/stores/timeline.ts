import { defineStore } from 'pinia'
import type { Timeline } from '@/models/Timeline'

interface TimelineState {
  timelineList: Timeline[]
}

export const useTimelineStore = defineStore({
  id: 'timeline',
  state: (): TimelineState => ({
    timelineList: [
      {
        company: 'Svitla Systems Inc.',
        position: 'Senior Web Developer',
        description: 'In the process...',
        date: 'December 2021'
      },
      {
        company: 'Boosteroid Cloud Gaming',
        position: 'Senior Web Developer',
        description: 'Creating a high-load platform from scratch.',
        date: 'January 2020'
      },
      {
        company: 'PaymentWall Inc.',
        position: 'Middle Full Stack Developer',
        description: 'Classified.',
        date: 'January 2019'
      },
      {
        company: 'CF.Digital',
        position: 'Middle Full Stack Developer',
        description: 'Creating different websites, e-commerce, CMS from scratch.',
        date: 'December 2017'
      },
      {
        company: 'Intraweb Agency',
        position: 'Junior Full Stack Developer',
        description: 'Add new functionality and optimization of international study platform.',
        date: 'September 2017'
      },
      {
        company: 'LeoDigital',
        position: 'Junior Full Stack Developer',
        description:
          'Refinement, add new functionality, bug fixes and optimization different websites based on different PHP systems. Creating different websites from scratch.',
        date: 'March 2016'
      }
    ]
  }),
  getters: {
    getTimeline: (state) => state.timelineList
  }
})
