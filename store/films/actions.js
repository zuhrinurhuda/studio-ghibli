const actions = {
  getFilms({ commit }) {
    this.$axios
      .$get('/films')
      .then(data => commit('updateFilms', data))
      .catch(error => console.log('error', error))
  }
}

export default actions
