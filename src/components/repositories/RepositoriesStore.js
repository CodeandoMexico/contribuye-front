import * as types from './RepositoriesTypes'

export default {
  state: {
    issues: [],
    allIssues: []
  },
  mutations: {
    [types.REPOSITORIES_SET_ISSUES] (state, issues) {
      state.issues = issues
    },
    [types.REPOSITORIES_SET_ALL_ISSUES] (state, issues) {
      state.allIssues = issues
    }
  },
  getters: {
    [types.REPOSITORIES_GET_ISSUES] (state) {
      return state.issues
    }
  },
  actions: {
    [types.SUBSCRIBE_TO_SOCKET] ({ commit }) {
      return new Promise(resolve => {
        const socket = window.io('https://contribuye-harvest.herokuapp.com')
        // const socket = window.io('http://localhost:7777')
        resolve(socket)
      })
    },
    [types.REPOSITORIES_FILTER_AGAIN] ({commit, state}, filters) {
      let issues = JSON.parse(JSON.stringify(state.allIssues))
      filters = JSON.parse(JSON.stringify(filters))
      return new Promise(resolve => {
        if (filters) {
          commit(types.REPOSITORIES_SET_ISSUES, issues)
          resolve(true)
        }
        let newIssues = issues.filter((issue, i) => {
          let allFind = true
          filters.every(filter => {
            filter = filter.toUpperCase().trim()
            allFind = !!issue.labels.find(label => filter === label.name.toUpperCase().trim())
            return allFind
          })
          return allFind
        })
        commit(types.REPOSITORIES_SET_ISSUES, newIssues)
        resolve(true)
      })
    },
    [types.REPOSITORIES_SORT_AGAIN] ({commit, state}, orderMethod) {
      console.log('Sorting by', orderMethod)
      return Promise.resolve(true).then(() => {
        let issues = JSON.parse(JSON.stringify(state.issues))
        issues = issues.sort((a, b) => {
          if (orderMethod === 'new') {
            const {dateA, dateB} = {dateA: new Date(a.updatedAt).getTime(), dateB: new Date(b.updatedAt).getTime()}
            if (dateA > dateB) {
              return -1
            } else {
              return 1
            }
          } else {
            return b.comments - a.comments
          }
        })
        commit(types.REPOSITORIES_SET_ISSUES, issues)
      })
    }
  }
}
