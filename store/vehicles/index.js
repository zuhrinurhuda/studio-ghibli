import state from './state'
import actions from './actions'
import mutations from './mutations'

const vehicles = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default vehicles
