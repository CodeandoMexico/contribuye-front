<template>
  <div class="filter-container">
    <div class="filter-content">
      <div class="hash-filter__container">
        <div class="hash-filer__label"> Filtrar por</div>
        <div class="hash-filter">
          <multiselect class="hash-filter__search"
            :tags="tagsList"
            :options="options"
            placeholder="Ejemplo: java acopio-api"
            @changed="tagsChanged"
          ></multiselect>
        </div>
      </div>
      <div class="filter-sort__container">
        <div class="filter-sort__actions">
          <div> <span @click="setFilter(1)" :class="{active: selectedFilter === 1}">Recientes</span> </div>
          <div> <span @click="setFilter(2)" :class="{active: selectedFilter === 2}"> Más comentados </span> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import store from './HashFilterStore'
import globalStore from '@/store/index'
import * as types from './HashFilterTypes'
import * as repositoriesTypes from '@/components/repositories/RepositoriesTypes'
import Multiselect from '@/components/multiselect/Multiselect'

export default {
  name: 'HashFilter',
  data () {
    return {
      tagsList: [],
      isLoading: false,
      selectedFilter: 1
    }
  },
  computed: {
    options: function () {
      return this.$store.getters[types.GET_FILTER_OPTIONS]
    }
  },
  created () {
    globalStore.registerModule('HashFilter', store)
  },
  beforeDestroy () {
    globalStore.unregisterModule('HashFilter')
  },
  methods: {
    tagsChanged (tags) {
      globalStore.commit(types.SET_LABELS, tags)
      this.$store.dispatch(repositoriesTypes.REPOSITORIES_FILTER_AGAIN, tags).then(() => {
        if (this.selectedFilter === 1) {
          this.$store.dispatch(repositoriesTypes.REPOSITORIES_SORT_AGAIN, 'new')
        } else {
          this.$store.dispatch(repositoriesTypes.REPOSITORIES_SORT_AGAIN, 'comments')
        }
      })
    },
    setFilter (i) {
      this.selectedFilter = i
      globalStore.commit(types.SET_SORT_METHOD, i)
      if (this.selectedFilter === 1) {
        this.$store.dispatch(repositoriesTypes.REPOSITORIES_SORT_AGAIN, 'new')
      } else {
        this.$store.dispatch(repositoriesTypes.REPOSITORIES_SORT_AGAIN, 'comments')
      }
    }
  },
  components: {
    Multiselect
  }
}
</script>

<style lang="scss" scoped>

.filter-container {
  background-color: #F3476D;
  width: 100%;
  min-height: 86px;

  .filter-content {
    max-width: 1124px;
    margin: 0 auto;
    display: flex;

    & > div {
      flex-basis: 50%;
    }

    @media screen and (max-width: 800px) {
      flex-wrap: wrap;
      
      & > div {
        flex-shrink: 0;
        flex-basis: 100%;
      }
    }

    .hash-filter__container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .hash-filer__label {
        margin-top: 11px;
        margin-bottom: 10px;
        text-align: left;
        font-size: 14;
        line-height: 16px;
        font-weight: bold;
      }

      .hash-filter {
        margin-right: 7px;
        margin-bottom: 13px;
      }
    }

    .filter-sort__container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .filter-sort__actions {
        margin-bottom: 7px;
        height: 40px;
        display: flex;
        justify-content: flex-end;

        & > * {
          margin: 0 9px;
          font-size: 16px;
          line-height: 19px;
          font-weight: bold;
          cursor: pointer;
          text-transform: uppercase;

          span.active {
            color: black;
          }
        }
      }
    }
  }
}

</style>
