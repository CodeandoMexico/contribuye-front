<template>
  <div class="repositories-container">
    <div class="repositories-content">
      <repository-issue v-for="issue in repositories" :key="issue.id" :issue="issue" :reposInLine="getReposInLine()">

      </repository-issue>
    </div>
  </div>
</template>

<script>

import RepositoryIssue from '@/components/repository-issue/RepositoryIssue'
import globalStore from '@/store/index'
import store from './RepositoriesStore'
import * as types from './RepositoriesTypes'
import * as hashTypes from '@/components/app-header/filter/HashFilterTypes'

export default {
  name: 'Repositories',
  data () {
    return {
      res: [],
      labelId: 0
    }
  },
  computed: {
    repositories: function () {
      return this.$store.getters[types.REPOSITORIES_GET_ISSUES]
    },
    filterLabels: function () {
      return this.$store.getters[hashTypes.GET_LABELS]
    },
    sortMethod: function () {
      return this.$store.getters[hashTypes.GET_SORT_METHOD]
    }
  },
  beforeCreate () {
    globalStore.registerModule('Repositories', store)
  },
  created () {
    let elm = this
    this.$store.dispatch(types.SUBSCRIBE_TO_SOCKET).then(socket => {
      socket.on('events', (issues) => {
        console.log(issues)
        issues = elm.removeReapeatedIssues(issues)
        elm.addDataToIssues(issues)
        elm.setAllLabels(issues)
        elm.$store.commit(types.REPOSITORIES_SET_ALL_ISSUES, issues)
        elm.$store.dispatch(types.REPOSITORIES_FILTER_AGAIN, elm.filterLabels).then(success => {
          if (success) {
            elm.$store.dispatch(types.REPOSITORIES_SORT_AGAIN, elm.sortMethod)
          }
        })
      })
    })
  },
  beforeDestroy () {
    globalStore.unregisterModule('Repositories')
  },
  methods: {
    setAllLabels (issues) {
      let labels = { }
      issues.forEach(issue => {
        issue.labels.forEach(label => {
          labels[label.name] = true
        })
      })
      this.$store.commit(hashTypes.SET_FILTER_OPTIONS, Object.getOwnPropertyNames(labels))
    },
    addDataToIssues (issues) {
      let elm = this
      issues.forEach(issue => {
        issue.name = issue.title
        delete issue.title
        issue.labels.forEach(label => {
          delete label.color
        })
        issue.labels.push({
          name: issue.status
        })
        issue.labels.push({
          name: issue.repository.language,
          backgroundColor: '000',
          color: 'fff'
        })
        issue.labels.forEach(label => {
          label.id = ++elm.labelId
        })
      }, this)
    },
    removeReapeatedIssues (issues) {
      let ids = {}
      return issues.filter(issue => {
        if (ids.hasOwnProperty(issue.id)) {
          return false
        }
        ids[issue.id] = true
        return true
      })
    },
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
    RepositoryIssue
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
