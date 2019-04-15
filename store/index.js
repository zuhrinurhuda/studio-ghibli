export const state = () => ({
  searchText: ''
})

export const mutations = {
  updateSearchText(state, payload) {
    state.searchText = payload
  }
}
