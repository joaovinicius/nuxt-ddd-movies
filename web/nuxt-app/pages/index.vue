<template>
  <movie-container-list
    v-if="catalog"
    :catalog="catalog"
    :loading="loading"
    page-header-title="Popular Movies"
    @next-page="handleNextPage"
    @go-to-page="handleGoToPage"
  />
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import Paginate from '../mixins/Paginate'

import MovieContainerList
  from '../components/movies/MovieContainerList.vue'

export default Paginate.extend({
  name: 'Index',

  components: {
    MovieContainerList
  },

  async fetch () {
    await this.fetchPopularMovies()
  },

  computed: {
    ...mapGetters('movies', [
      'catalog',
      'loading'
    ])
  },

  methods: {
    ...mapActions('movies', ['fetchPopularMovies']),

    handleNextPage ():void {
      this.goToNextPage('page', '1')
    },

    handleGoToPage (page: number):void {
      this.goToPage('page', `${page}`)
    }
  }
})
</script>
