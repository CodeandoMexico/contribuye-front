<template>
  <div class="menu-container">
    <nav class="menu-items">
      <a href="/#"><img id="menu-logo" src="./../../../assets/menu-logo.png" /></a>
      <a class="active" href="/#"> Quiero ayudar </a>
      <a class="need-help" href="/#"> Necesito ayuda </a>
      <a href="/#"> Faq </a>
      <a class="gratitude" href="/#"> Agradecimientos </a>
      <a href="/#"> Contacto </a>
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
