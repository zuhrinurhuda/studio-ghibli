const actions = {
  getFilms({ commit }) {
    this.$axios
      .$get('/films')
      .then(data => commit('setFilms', data))
      .catch(error => console.log('error', error))
  }
}

export default actions
