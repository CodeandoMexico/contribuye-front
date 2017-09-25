import Vue from 'Vue'

export default {
  bind: function (elm, data) {
    if (data.value) {
      Vue.nextTick(() => elm.focus())
    } else {
      elm.blur()
    }
  }
}
