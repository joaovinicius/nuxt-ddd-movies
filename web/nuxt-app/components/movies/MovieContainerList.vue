<template>
  <v-row>
    <v-col cols="12">
      <page-header :title="pageHeaderTitle" />
    </v-col>

    <loader v-if="loading" />

    <v-col v-else cols="12">
      <movie-list
        v-if="catalog"
        :catalog="catalog"
        @next-page="handleNextPage"
        @previous-page="handlePreviousPage"
        @go-to-page="handleGoToPage"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import PageHeader from '../shared/PageHeader.vue'
import Loader from '../shared/Loader.vue'
import ICatalog from '../../../../Domain/Movie/Entity/ICatalog'
import MovieList from './MovieList.vue'

export default Vue.extend({
  name: 'Index',

  components: {
    PageHeader,
    MovieList,
    Loader
  },

  props: {
    pageHeaderTitle: {
      type: String,
      required: true
    },

    catalog: {
      type: Object,
      required: true
    } as PropOptions<ICatalog>,

    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    handleNextPage () {
      this.$emit('next-page')
    },

    handlePreviousPage () {
      this.$emit('previous-page')
    },

    handleGoToPage (page: number) {
      this.$emit('go-to-page', page)
    }
  }
})
</script>
