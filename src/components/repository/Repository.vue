<template>
  <div class="repository-container" :class="{ hasTwo: reposInLine === 2}">
    <div class="repository-content">
      <h3> {{repository.channel}} </h3>
      <h2> {{repository.title}} </h2>
      <div class="repository-actions">
        <button> Website </button>
        <button> HELP </button>
      </div>
      <div class="repository-contributors">
        <img :src="user.image" v-for="user in repository.users" :key="user.name" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Repository',
  data () {
    return {
      repo: {}
    }
  },
  props: ['repository', 'reposInLine'],
  methods: {
  }
}
</script>

<style scoped>
.repository-container {
  min-width: 255px;
  flex-shrink: 0;
  border-radius: 5px;
  flex-basis: calc((100% - 30px) / 3);
  margin-bottom: 50px;
}

.repository-content {
  background-color: white;
  display: inline-block;
}

.repository-container.has-two {
  flex-basis: calc((100% - 15px) / 2);
}

h3 {
  font-size: 14px;
  font-style: normal;
  line-height: 16px;
  margin: 15px 0;
  color: #6D6E71;
  text-transform: uppercase;
  padding: 0 20px;
}

h2 {
  font-style: bold;
  font-size: 25px;
  line-height: 29px;
  padding: 0 20px;
  margin-bottom: 18px;
}

h2:hover {
  color: #F3476D;
}

.repository-actions {
  display: flex;
  justify-content: center;
  margin-bottom: 26px;
}

.repository-actions > button {
  width: 80px;
  height: 26px;
  margin: 0 6.5px;
  border: none;
  background-color: #F3476D;
  color: white;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  cursor: pointer;
}

.repository-contributors {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 38px;
}

.repository-contributors img {
  width: 40px;
  height: 40px;
  margin: 0 9px;
}

@media screen and (max-width: 800px) {
  .repository-container {
    flex-basis: calc((100% - 15px) / 2);
  }
}

@media screen and (max-width: 530px) {
  .repository-container {
    min-width: initial;
    flex-basis: 100%;
  }
}
</style>
