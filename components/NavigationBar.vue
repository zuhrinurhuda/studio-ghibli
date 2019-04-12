<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li v-for="item in menu" :key="item.id">
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
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
      ]
    }
  }
}
</script>
