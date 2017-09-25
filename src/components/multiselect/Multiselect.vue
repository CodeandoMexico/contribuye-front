<template>
  <div class="multiselect" @mousedown="focus=true" @click="focus=true" :class="{ 'multiselect-focus': focus, 'multiselect-expanded': tag && availableOptions.length }" >
    <div class="label" v-for="(label,i) in labels" :key="label">
      <div class="label-text"> {{label}} </div>
      <div class="label-close" @click="close(i)"> x </div>
    </div>
    <input :placeholder="placeholder" v-if="focus" v-focus="true" v-model="tag" type="text" @blur="waitBlur()" @keyup="filterOptions(),addTag($event)" @keydown="keydown" />
    <div v-if="tag" class="multiselect-list">
      <div class="multiselect-option" :class="{'multiselect__option-selected': selected === i }" v-for="(option,i) in availableOptions" :key="option" @click.stop=";" @mousedown="addOption(i)" >
        <span>{{option}}</span>
        <span class="option-label">{{selectText}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'Vue'

export default {
  name: 'HashFilter',
  data () {
    return {
      labels: [],
      focus: false,
      tag: '',
      availableOptions: [],
      selected: 0
    }
  },
  created () {
    this.labels = this.tags
  },
  props: {
    tags: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Escribe o selecciona un valor'
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    selectText: {
      type: String,
      default: '[Enter]'
    }
  },
  methods: {
    close (index) {
      this.labels = this.labels.filter((e, i) => {
        if (i === index) {
          return false
        }
        return true
      })
      this.$emit('changed', this.labels)
    },
    addTag (event) {
      if (this.tag && event.key.match(/enter/i)) {
        return this.addOption(this.selected)
      }
      if (this.tag.match(/\s/g)) {
        this.tag.split(' ').filter(tag => tag.match(/\S/g)).forEach(tag => {
          this.push(tag)
        })
        this.clean()
      }
    },
    addOption (index) {
      this.push(this.availableOptions[index])
      Vue.nextTick(() => {
        this.focus = true
      })
    },
    push (value = this.tag) {
      value = value.trim().toUpperCase()
      if (value && !this.labels.find(label => label.trim().toUpperCase() === value)) {
        this.labels.push(value)
        this.$emit('changed', this.labels)
      }
      this.clean()
    },
    clean () {
      this.tag = ''
      this.selected = 0
      Vue.nextTick(() => {
        this.focus = true
      })
    },
    filterOptions () {
      const text = this.tag.toUpperCase().trim()
      this.availableOptions = this.options.filter(opt => {
        const option = opt.toUpperCase()
        return option.indexOf(text) > -1 && !this.labels.find(label => label.toUpperCase() === option)
      }).sort((valueA, valueB) => {
        const {a, b} = {a: valueA.toUpperCase(), b: valueB.toUpperCase()}
        const {na, nb} = {na: a.indexOf(text), nb: b.indexOf(text)}
        if (na === nb) {
          if (a > b) {
            return 1
          }
          return -1
        }
        return na - nb
      })
    },
    waitBlur () {
      this.tag = ''
      this.selected = 0
      this.focus = false
      this.availableOptions = []
    },
    keydown: function (e) {
      switch (e.key) {
        case 'ArrowUp': {
          e.preventDefault()
          if (!this.selected) {
            break
          }
          this.selected--
          break
        }
        case 'ArrowDown': {
          e.preventDefault()
          if (this.selected >= this.availableOptions.length - 1) {
            break
          }
          this.selected++
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped >

  $filter-background: #F3476D;
  $filter-padding: 5px;
  $filter-color: white;
  $option-height: 34px;
  $filter-auxiliar-color: black;

  .multiselect {
    min-height: 36px;
    display: flex;
    background-color: $filter-color;
    position: relative;
    flex-wrap: wrap;
    border:2px solid transparent;
    box-sizing: border-box;

    border-radius: $filter-padding;

    &.multiselect-focus {
      border: 2px solid #4d90fe;
    }

    &.multiselect-expanded {
      border-radius: $filter-padding $filter-padding 0 0;
      border-bottom: 1px solid transparent;

      .multiselect-list {
        width: calc(100% + 4px);
        margin-left: -2px;
        border: 2px solid #4d90fe;
        box-sizing: border-box;
        border-top: none;
        border-radius: 0 0 $filter-padding $filter-padding;
      }
    }

    .label {
      background-color: $filter-background;
      display: flex;
      height: 30px;
      margin: $filter-padding;
      border-radius: $filter-padding;
      line-height: 19px;
      font-size: 16px;
      align-items: center;

      .label-text {
        text-transform: uppercase;
        padding: 0 9px;
      }

      .label-close {
        background-color: $filter-auxiliar-color;
        height: 30px;
        width: 24px;
        border-radius: $filter-padding;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: normal;
        line-height: 16px;
        cursor: pointer;
      }
    }

    input {

      flex-grow: 1;
      flex-basis: 100px;
      font-size: inherit;
      font-family: inherit;
      line-height: inherit;
      font-weight: inherit;
      padding-left: 10px;
      background-color: transparent;
      max-width: calc(100% - 10px);

      &::placeholder {
        font-size: 16px;
        line-height: 19;
        font-weight: bold;
        color: #E0E0E0;
      }

      &, &:active, &:focus, &:hover {
        border: none;
        outline: none;
        text-transform: uppercase;
      }
      
    }

    .multiselect-list {
      position: absolute;
      top: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: $filter-color;
      color: $filter-background;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      max-height: 204px;
      overflow: auto;
      position: absolute;

      .multiselect-option {
        flex-grow: 0;
        flex-shrink: 0;
        text-align: left;
        height: $option-height;
        display: flex;
        cursor: pointer;
        padding-left: 12px;
        align-items: center;

        span {
          flex-grow: 1;
        }

        .option-label {
          display: none;
          text-transform: uppercase;
          flex-grow: 0;
          padding: 0 $filter-padding;
          color: $filter-auxiliar-color;
          font-size: 12px;
          font-weight: bold;
          height: $option-height;
          align-items: center;
        }

        &.multiselect__option-selected {
          .option-label {
            display: flex;
          }
        }

        &:hover, &.multiselect__option-selected {
          background-color: #F2F2F2;
        }
      }
    }
  }
</style>
