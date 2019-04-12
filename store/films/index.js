import state from './state'
import actions from './actions'
import mutations from './mutations'

const films = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default films
