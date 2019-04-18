<template>
  <base-section>
    <base-card
      v-for="film in films"
      :key="film.id"
      :title="film.title"
      :description="film.description"
    />
  </base-section>
</template>

<script>
import BaseSection from '~/components/commons/BaseSection.vue'
import BaseCard from '~/components/commons/BaseCard.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    BaseSection,
    BaseCard
  },
  computed: {
    ...mapState({
      films: ({ films, searchText }) => {
        return films.filmList.filter(
          film =>
            film.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      }
    })
  },
  created: function() {
    this.getFilms()
  },
  methods: {
    ...mapActions({
      getFilms: 'films/getFilms'
    })
  }
}
</script>
