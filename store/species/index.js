import state from './state'
import actions from './actions'
import mutations from './mutations'

const species = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default species
