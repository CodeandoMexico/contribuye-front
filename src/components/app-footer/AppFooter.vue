<template>
  <div class="footer-container">
  <div class="footer-content">
    <div class="links">
      <div class="first-space">
        <a target="_blank" href="http://sismomexico.org/#section-quiero_ayudar"> Quiero ayudar </a>
      </div>
      <div>
        <!-- <a href="/#"> Agradecimientos </a> -->
      </div>
      <div class="second-space">
        <a target="_blank" href="http://sismomexico.org/#section-necesito-ayuda"> Necesito ayuda </a>
      </div>
      <!-- <div>
        <a href="/#"> Contacto </a>
      </div> -->
      <div>
        <a target="_blank" href="http://sismomexico.org/#section-faq"> Preguntas frecuentes </a>
      </div>
    </div>
    <div class="social">
      <a target="_blank" class="slack-icon" href="http://slack.codeandomexico.org"><img src="../../assets/slack.png" ></a>
      <a target="_blank" class="github-icon" href="http://github.com/CodeandoMexico"><img src="../../assets/github.png" ></a>
      <a target="_blank" href="http://twitter.com/CodeandoMexico"><img src="../../assets/twitter.png" ></a>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'AppFooter',
  data () {
    return {
      title: 'Estos son los issues abiertos en Github con la etiqueta #helpWanted'
    }
  }
}
</script>

<style scoped>
.footer-container {
  height: 229px;
  width: 100%;
  background-color: black;
  display: inline-block;
}

.footer-content {
  width: 100%;
  max-width: 1124px;
  display: flex;
  flex-wrap: wrap;
  margin: 48px auto 44px auto;
  text-transform: uppercase;
  font-size: 14px;
  height: calc(100% - 92px);
}

.footer-content > * {
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 0;
}

.footer-content .links {
  display: flex;
  flex-wrap: wrap;
  letter-spacing: .7px;
  line-height: normal;
  font-weight: bold;
  font-size: 14px;
}

.footer-content .links > div:nth-child(2n-1){
  width: calc(((100% - 15px) * 2) / 3);
  margin-right: 15px;
  text-align: left;
}

.footer-content .links > div {
  min-height: 17px;;
  display: inline-block;
}

.footer-content .links > div > a {
  text-decoration: none;
  color: white;
}

.footer-content .links > div > a:hover {
  color: #F3476D;
}

/* .footer-content .links > .first-space {
  margin-bottom: 41px;
}

.footer-content .links > .second-space {
  margin-top: -5px;
  margin-bottom: 32px;
} */

.footer-content .social {
  display: flex;
  align-items: flex-end;
}

.footer-content .social > a > img {
  width: 42px;
  height: 42px;;
}

.footer-content .social > a.slack-icon {
  margin-left: auto;
  margin-right: 64px;
}

.footer-content .social > a.github-icon {
  margin-right: 52px;
}
</style>
