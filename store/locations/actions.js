const actions = {
  getLocations({ commit }) {
    this.$axios
      .$get('/locations')
      .then(data => commit('updateLocations', data))
      .catch(error => console.log('error', error))
  }
}

export default actions
