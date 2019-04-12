<template>
  <div
    class="uk-card uk-card-default uk-card-hover uk-width-medium uk-margin-right uk-margin-bottom"
  >
    <div class="uk-card-header">
      <h3 class="uk-card-title">{{ card.title }}</h3>
    </div>
    <div class="uk-card-body">{{ description }}</div>
    <div class="uk-card-footer">
      <div class="uk-button uk-button-text">Detail</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    description: function() {
      return this.card.description.substr(0, 100) + '...'
    }
  }
}
</script>
