import state from './state'
import actions from './actions'
import mutations from './mutations'

const people = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default people
