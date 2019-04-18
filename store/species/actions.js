const actions = {
  getSpecies({ commit }) {
    this.$axios
      .$get('/species')
      .then(data => commit('updateSpecies', data))
      .catch(error => console.log('error', error))
  }
}

export default actions
