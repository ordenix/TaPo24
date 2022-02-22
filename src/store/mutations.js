export default {
  ADD_FAVORITES_TO_ARRAY (state, item) {
    if (state.favorites_array.indexOf(item) === -1) {
      state.favorites_array.push(item)
      localStorage.removeItem('favorites_array')
      localStorage.setItem('favorites_array', JSON.stringify(state.favorites_array))
    }
  },
  REMOVE_FAVORITES_FROM_ARRAY (state, item) {
    const index = state.favorites_array.indexOf(item)
    if (index !== -1) {
      state.favorites_array.splice(index, 1)
      localStorage.removeItem('favorites_array')
      localStorage.setItem('favorites_array', JSON.stringify(state.favorites_array))
    }
  },
  SET_FAVORITES (state, data) {
    state.favorites_array = data
  },
  SET_BLOCKING (state) {
    const status = localStorage.getItem('BLOCKING')
    if (status) {
      state.block_ini_logo = true
    }
  },
  SET_FLAG_BLOCKING (state) {
    localStorage.setItem('BLOCKING', JSON.stringify('BLOCKING'))
    state.block_ini_logo = true
  },
  REMOVE_FLAG_BLOCKING (state) {
    localStorage.removeItem('BLOCKING')
    state.block_ini_logo = false
  }
}
