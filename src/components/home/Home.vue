<template>
  <div class="main-container">
    <header>
      <app-header> </app-header>
    </header>
    <repositories></repositories>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>

import AppHeader from '@/components/app-header/AppHeader'
import Repositories from '@/components/repositories/Repositories'
import AppFooter from '@/components/app-footer/AppFooter'

export default {
  name: 'Home',
  data () {
    return {
      greating: 'hola mundo'
    }
  },
  components: {
    AppHeader,
    Repositories,
    AppFooter
  }
}
</script>

<style scoped>
.main-container{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
