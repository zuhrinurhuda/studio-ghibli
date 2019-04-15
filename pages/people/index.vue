<template>
  <base-section>
    <base-card />
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
      // search
    })
  },
  methods: {
    ...mapActions({

    })
  }
}
</script>

<style>

</style>
