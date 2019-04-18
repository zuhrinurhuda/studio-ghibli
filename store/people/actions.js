const actions = {
  getPeople({ commit }) {
    this.$axios
      .$get('/people')
      .then(data => commit('updatePeople', data))
      .catch(error => console.log(error))
  }
}

export default actions
