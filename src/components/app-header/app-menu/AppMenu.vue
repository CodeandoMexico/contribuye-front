<template>
  <div class="menu-container">
    <nav class="menu-items">
      <a target="_blank" href="/#"><img id="menu-logo" src="./../../../assets/menu-logo.png" /></a>
      <a target="_blank" class="active" href="http://sismomexico.org/#section-quiero_ayudar"> Quiero ayudar </a>
      <a target="_blank" class="need-help" href="http://sismomexico.org/#section-necesito-ayuda"> Necesito ayuda </a>
      <a target="_blank" href="http://sismomexico.org/#section-faq"> Faq </a>
      <!-- <a target="_blank" class="gratitude" href="/#"> Agradecimientos </a> -->
      <!-- <a target="_blank" href="/#"> Contacto </a> -->
    </nav>
  </div>
</template>

<script>

export default {
  name: 'AppMenu',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.menu-container{
  margin-bottom: auto;
  background-color: #222423;
  width: 100%;
  flex-basis: 60px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}

.menu-items {
  max-width: 1124px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  min-height: 60px;
  text-transform: uppercase;
  font-size: 14px;
}

.menu-items a {
  text-decoration: none;
  color: white;
}

.need-help {
  margin: 0 auto 0 25px;
}

.gratitude {
  margin: 0 15px 0 12px;
}

.menu-items a.active,.menu-items a:hover {
  color: #F3476D;
}

#menu-logo {
  width: 48px;
  height: 48px;
  margin-right: 29px;
}
</style>
