<template>
  <div class="header-container">
    <app-menu></app-menu>
    <img id="header-logo" src="./../../assets/logo.png"/>
     <p class="title"> 
       {{title}}
     </p>
     <hash-filter></hash-filter>
  </div>
</template>

<script>

import HashFilter from './filter/HashFilter'
import AppMenu from './app-menu/AppMenu'

export default {
  name: 'AppHeader',
  data () {
    return {
      title: 'Estos son los issues abiertos en Github con la etiqueta #helpWanted'
    }
  },
  components: {
    AppMenu,
    HashFilter
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  background-color: black;
  min-height: 440px;
  background-image: url('./../../assets/header.jpg');
  background-size: auto 100%;
  background-position: center 0;
  background-repeat: no-repeat;
  font-weight: bold;
}

p.title {
   font-size: 18px;
   line-height: 31px;
   height: 54px;
   margin-top: 0;
   margin-bottom: 22px;
}

#header-logo{
  width: 142px;
  height: 142px;
  margin-bottom: 28px;
}
</style>
