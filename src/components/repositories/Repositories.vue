<template>
  <div class="repositories-container">
    <div class="repositories-content">
      <Repository v-for="repository in repositories" :key="repository.channel" :repository="repository" :reposInLine="getReposInLine()">

      </Repository>
    </div>
  </div>
</template>

<script>

import Repository from '@/components/repository/Repository'

export default {
  name: 'Repositories',
  data () {
    return {
      repositories: [
        {
          channel: 'Canal',
          title: 'Lorem ipsum dolor sit amet',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 2',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 3',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 2',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 3',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 2',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 3',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 2',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 3',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 2',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 3',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 2',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }, {
          channel: 'Canal 3',
          title: 'Another Lorem Itsum dolor',
          babels: ['website', 'help'],
          users: [{
            name: 'user 1',
            image: '/static/user.png'
          }, {
            name: 'user 2',
            image: '/static/user.png'
          }, {
            name: 'user 3',
            image: '/static/user.png'
          }, {
            name: 'user 4',
            image: '/static/user.png'
          }]
        }
      ]
    }
  },
  methods: {
    getReposInLine () {
      const t = this.repositories.length
      if (t >= 3) {
        return 3
      } else {
        return t
      }
    }
  },
  components: {
    Repository
  }
}
</script>

<style scoped>
.repositories-container {
  background-color: #E5E5E5;
  width: 100%;
  flex-grow: 1;
}

.repositories-content{
  display: flex;
  width: 100%;
  max-width: 1124px;
  margin: 50px auto;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
