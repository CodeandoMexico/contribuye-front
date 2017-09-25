<template>
  <div class="repository-container" :class="{ hasTwo: reposInLine === 2}">
    <div @click="open" class="repository-content">
      <h3> <a @click.stop=";" target="blank" :href="issue.repository.url">{{issue.repository.name}}</a> </h3>
      <h2> {{issue.name}} </h2>
      <div class="repository-actions">
        <span v-for="label in issue.labels" :key="label.id" :style="{ 'color': '#' + label.color, 'background-color': '#' + label.backgroundColor }"> {{label.name}} </span>
      </div>
      <div class="repository-data">
        <span>
          creado: {{getDate(issue.createdAt)}}
        </span>
        <span>
          modificado: {{getDate(issue.updatedAt)}}
        </span>
        <span class="other">
          comentarios: {{issue.comments}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RepositoryIssue',
  data () {
    return {
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    }
  },
  props: ['issue', 'reposInLine'],
  methods: {
    getDate (aDate) {
      let date = new Date(aDate)
      let minutes = date.getMinutes() + ''
      if (minutes.length < 2) {
        minutes = '0' + minutes
      }
      return `${date.getDate()}/${this.months[date.getMonth()]}/${date.getFullYear()} ${date.getHours()}:${minutes}`
    },
    open () {
      window.open(this.issue.url)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  width: 100%;
  cursor: pointer;
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

  & > a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #F3476D;
    }
  }
}

h2 {
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  padding: 0 20px;
  margin-bottom: 18px;
}

.repository-content:hover h2 {
  color: #F3476D;
}

.repository-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 26px;
}

.repository-actions > span {
  flex-basis: 80px;
  padding: 4.5px 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 26px;
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

.repository-data {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;
  justify-content: center;
  margin-bottom: 38px;
  padding: 0 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;

  .other {
    padding-top: 5px; 
  }
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
