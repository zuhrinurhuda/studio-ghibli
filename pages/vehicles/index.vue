<template>
  <base-section>
    <base-card
      v-for="vehicle in vehicles"
      :key="vehicle.id"
      :title="vehicle.name"
      :description="vehicle.description"
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
      vehicles: ({ vehicles, searchText }) => {
        return vehicles.vehicleList.filter(
          vehicle =>
            vehicle.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      }
    })
  },
  created: function() {
    this.getVehicles()
  },
  methods: {
    ...mapActions({
      getVehicles: 'vehicles/getVehicles'
    })
  }
}
</script>
