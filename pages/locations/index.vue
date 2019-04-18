<template>
  <base-section>
    <base-card
      v-for="location in locations"
      :key="location.id"
      :title="location.name"
      :description="location.climate"
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
      locations: ({ locations, searchText }) => {
        return locations.locationList.filter(
          location =>
            location.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      }
    })
  },
  created: function() {
    this.getLocations()
  },
  methods: {
    ...mapActions({
      getLocations: 'locations/getLocations'
    })
  }
}
</script>
