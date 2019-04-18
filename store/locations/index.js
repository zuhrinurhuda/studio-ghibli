import state from './state'
import actions from './actions'
import mutations from './mutations'

const locations = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default locations
