<template>
  <nav class="uk-navbar-container">
    <div class="uk-margin-left uk-margin-right">
      <div class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li
              v-for="item in menu"
              :key="item.id"
              :class="isActive(item.path)"
            >
              <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <a class="uk-navbar-toggle" uk-search-icon href="#" />
          <div
            class="uk-drop"
            uk-drop="mode: click; pos: left-center; offset: 0"
          >
            <form class="uk-search uk-search-navbar uk-width-1-1">
              <input
                class="uk-search-input"
                type="search"
                placeholder="Search..."
                :value="searchText"
                @input="updateSearchText($event.target.value)"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NavigationBar',
  data: function() {
    return {
      menu: [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Films', path: '/films' },
        { id: 3, name: 'People', path: '/people' },
        { id: 4, name: 'Locations', path: '/locations' },
        { id: 5, name: 'Species', path: '/species' },
        { id: 6, name: 'Vehicle', path: '/vehicle' }
      ],
      searchText: ''
    }
  },
  methods: {
    ...mapMutations({
      updateSearchText: 'updateSearchText'
    }),
    isActive: function(path) {
      return path === this.$route.path ? 'uk-active' : null
    }
  }
}
</script>
