import axios from 'axios'

export default {
  ADD_FAVORITES_TO_ARRAY (state, item) {
    if (state.favorites_array.indexOf(item) === -1) {
      state.favorites_array.push(item)
      localStorage.removeItem('favorites_array')
      localStorage.setItem('favorites_array', JSON.stringify(state.favorites_array))
    }
  },
  ADD_TO_OFFLINE_STACK_MODULE_NAME (state, moduleName) {
    const stackData = localStorage.getItem('offline_stack_moduleName')
    if (stackData) {
      state.offline_stack_moduleName = JSON.parse(stackData)
    }
    state.offline_stack_moduleName.push(moduleName)
    localStorage.removeItem('offline_stack_moduleName')
    localStorage.setItem('offline_stack_moduleName', JSON.stringify(state.offline_stack_moduleName))
  },
  EXECUTE_OFFLINE_STACK_MODULE_NAME (state) {
    if (navigator.onLine) {
      const stackData = localStorage.getItem('offline_stack_moduleName')
      if (stackData) {
        const stackParsedData = JSON.parse(stackData)
        for (const element of Object.keys(stackParsedData)) {
          for (let i = 0; i < 100000; i++) {
            if (navigator.onLine) continue
            else break
          }
          const headers = {
            'Content-Type': 'application/json'
          }
          if (stackParsedData[element] !== 's') {
            const data = {
              moduleName: stackParsedData[element]
            }
            axios
              .post(state.path_api + '/module_clicked', data, { headers })
          }
        }
        localStorage.removeItem('offline_stack_moduleName')
      }
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
  },
  GET_INSTALLATION_PARAM (state) {
    const UID = localStorage.getItem('UID')
    const headers = {
      'Content-Type': 'application/json'
    }
    if (UID) {
      const UID_PARSED = JSON.parse(UID)
      state.UID = UID_PARSED
      const payload = {
        id: 0,
        UID: state.UID,
        version_number: 0,
        last_start: 0
      }
      if (navigator.onLine) {
        axios
          .post(state.path_api + '/installation/install_Param', payload, { headers })
          .then(response => {
            state.version = response.data.version_number
            localStorage.setItem('VERSION', JSON.stringify(state.version))
          })
      } else {
        const version = localStorage.getItem('VERSION')
        if (version) {
          const versionParsed = JSON.parse(version)
          state.version = versionParsed
        }
      }
    } else {
      if (navigator.onLine) {
        axios
          .get(state.path_api + '/installation/get_UID', { headers })
          .then(response => {
            state.UID = response.data.UID
            localStorage.setItem('UID', JSON.stringify(state.UID))
            const payload = {
              id: 0,
              UID: state.UID,
              version_number: 0,
              last_start: 0
            }
            axios
              .post(state.path_api + '/installation/install_Param', payload, { headers })
              .then(response => {
                state.version = response.data.version_number
                localStorage.setItem('VERSION', JSON.stringify(state.version))
              })
          })
      }
    }
  }
}
