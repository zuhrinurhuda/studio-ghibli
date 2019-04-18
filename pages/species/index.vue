<template>
  <base-section>
    <base-card
      v-for="species in speciesList"
      :key="species.id"
      :title="species.name"
      :description="species.hair_colors"
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
      speciesList: ({ species, searchText }) => {
        return species.speciesList.filter(
          species.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      }
    })
  },
  created: function() {
    this.getSpecies()
  },
  methods: {
    ...mapActions({
      getSpecies: 'species/getSpecies'
    })
  }
}
</script>
