import { defineStore } from 'pinia'
import type { Skill } from '@/models/Skill'

interface SkillsState {
  skillsList: Skill[]
  colorList: string[]
}

export const useSkillsStore = defineStore({
  id: 'skills',
  state: (): SkillsState => ({
    skillsList: [
      // Language
      { skill: 'PHP', level: 7 },
      { skill: 'XML', level: 4 },
      { skill: 'SQL', level: 4 },
      { skill: 'TypeScript', level: 2 },
      { skill: 'JavaScript', level: 1 },

      // Framework
      { skill: 'Laravel', level: 10 },
      { skill: 'Lumen', level: 7 },
      { skill: 'Symfony', level: 5 },

      // Database
      { skill: 'PostgreSQL', level: 9 },
      { skill: 'MySQL', level: 7 },
      { skill: 'Redis', level: 6 },
      { skill: 'MongoDB', level: 5 },
      { skill: 'ClickHouse', level: 5 },
      { skill: 'Tarantool', level: 5 },
      { skill: 'Memcached', level: 6 },
      { skill: 'AWS RDS', level: 6 },
      { skill: 'AWS DynamoDB', level: 6 },

      // Cloud
      { skill: 'AWS', level: 5 },
      { skill: 'Google Cloud', level: 5 },
      { skill: 'DigitalOcean', level: 5 },

      // DevOps
      { skill: 'nginx', level: 4 },
      { skill: 'Apache', level: 3 },
      { skill: 'haproxy', level: 3 },
      { skill: 'NetData', level: 3 },
      { skill: 'WaveScope', level: 3 },
      { skill: 'Lens', level: 3 },
      { skill: 'Docker', level: 7 },
      { skill: 'Kubernetes', level: 3 },
      { skill: 'Jenkins', level: 5 },
      { skill: 'GitHab', level: 5 },
      { skill: 'GitLab', level: 5 },
      { skill: 'Microsoft Azure', level: 5 },

      // Frontend
      { skill: 'Vue.js', level: 8 },
      { skill: 'Nuxt.js', level: 5 },
      { skill: 'Vuex', level: 4 },
      { skill: 'Pinia', level: 4 },
      { skill: 'SPA', level: 4 },
      { skill: 'TailwindCSS', level: 4 },
      { skill: 'Axios', level: 3 },
      { skill: 'Ajax', level: 3 },
      { skill: 'JSON', level: 4 },

      // Event Driven
      { skill: 'RabbitMQ', level: 6 },
      { skill: 'AWS SQS', level: 6 },

      // Testing
      { skill: 'PHPUnit', level: 4 },
      { skill: 'Xdebug', level: 4 },

      // Software
      { skill: 'Jira', level: 5 },
      { skill: 'Kibana', level: 5 },
      { skill: 'Microsoft Teams', level: 5 },

      // Technologies
      { skill: 'PHP Parallel', level: 5 },
      { skill: 'PHP Swoole', level: 4 },
      { skill: 'ElasticSearch', level: 5 },
      { skill: 'Workerman', level: 5 },
      { skill: 'socket.io', level: 5 },
      { skill: 'Pusher', level: 5 },
      { skill: 'Amazon S3', level: 5 },
      { skill: 'Google Cloud Storage', level: 4 },
      { skill: 'Cloudflare', level: 4 },
      { skill: 'Composer', level: 4 },
      { skill: 'npm', level: 4 },
      { skill: 'Git', level: 4 },
      { skill: 'RESTful API', level: 4 },
      { skill: 'GraphQL', level: 4 },
      { skill: 'gRPC', level: 4 },

      // Methodologies
      { skill: 'Event-Driven Architecture', level: 4 },
      { skill: 'Service Oriented Architecture', level: 4 },
      { skill: 'Microservice Architecture', level: 4 },
      { skill: 'Event Sourcing', level: 4 },
      { skill: 'TDD', level: 4 },
      { skill: 'DRY', level: 4 },
      { skill: 'KISS', level: 4 },
      { skill: 'S.O.L.I.D.', level: 4 },
      { skill: 'OOP', level: 4 },
      { skill: 'MVC', level: 4 }
    ],
    colorList: [
      '#ff3366',
      '#ff6633',
      '#FFCC33',
      '#33FF66',
      '#33FFCC',
      '#33CCFF',
      '#3366FF',
      '#6633FF',
      '#CC33FF'
    ]
  }),
  getters: {
    getSkillsList: (state) => state.skillsList,
    getSkillsListArray: (state) => {
      return state.skillsList.map((skill) => [skill.skill, skill.level])
    },
    getRandomColor: (state) => () => {
      const index = Math.floor(Math.random() * state.colorList.length)
      return state.colorList[index]
    }
  }
})
