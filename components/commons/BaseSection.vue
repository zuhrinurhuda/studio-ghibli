<template>
  <div class="uk-section" :class="sectionType">
    <div class="uk-container">
      <div class="uk-flex uk-flex-center uk-flex-wrap">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSection',
  props: {
    color: {
      type: String,
      default: 'default',
      validator: function(value) {
        // The value must match one of these string
        const options = ['default', 'muted', 'primary', 'secondary']
        return options.indexOf(value.toLowerCase()) !== -1
      }
    }
  },
  computed: {
    sectionType: function() {
      return `uk-section-${this.color}`
    }
  }
}
</script>
