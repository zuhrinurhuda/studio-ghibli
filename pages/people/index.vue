<template>
  <base-section>
    <base-card
      v-for="person in people"
      :key="person.id"
      :title="person.name"
      :description="person.age"
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
      people: ({ people, searchText }) => {
        return people.peopleList.filter(
          person =>
            person.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      }
    })
  },
  created: function() {
    this.getPeople()
  },
  methods: {
    ...mapActions({
      getPeople: 'people/getPeople'
    })
  }
}
</script>
