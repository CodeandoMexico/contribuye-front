<template>
  <header>
    <app-header> </app-header>
  </header>
</template>

<script>

import AppHeader from '@/components/app-header/AppHeader'

export default {
  name: 'Home',
  data () {
    return {
      greating: 'hola mundo'
    }
  },
  components: {
    AppHeader
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
