const actions = {
  getVehicles({ commit }) {
    this.$axios
      .$get('/vehicles')
      .then(data => commit('updateVehicle', data))
      .catch(error => console.log('error', error))
  }
}

export default actions
