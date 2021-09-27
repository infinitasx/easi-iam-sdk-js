import { createStore } from 'vuex'
import { IAM } from '../utils/iamUtils'

// 初始化城市ID
const defaultCityID =
  new URL(window.location.href).searchParams.get('scope_id') || window.sessionStorage.getItem('scope_id')
if (defaultCityID) {
  window.sessionStorage.setItem('scope_id', defaultCityID)
}

export default createStore({
  state: {
    userInfo: null,
    globalLoading: false,
    cityID: defaultCityID,
    cityName: '',
    cityList: [],
    devices: []
  },
  mutations: {
    SET_LOADING (state, loading) {
      state.globalLoading = loading
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo
    },
    SET_CITY_ID (state, cityID) {
      state.cityID = cityID
      window.sessionStorage.setItem('scope_id', cityID)
      const currentCity = state.cityList.find(city => city.id === cityID)
      if (currentCity) {
        state.cityName = currentCity.name
      }
    },
    SET_CITY_LIST (state, cityList) {
      state.cityList = cityList
    },
    SET_DEVICE (state, devices) {
      state.devices = devices
    }
  },
  actions: {
    fetchUserInfo ({ commit }) {
      return IAM
        .getUserInfo()
        .then((res) => {
          commit('SET_USER_INFO', res)
          commit('SET_DEVICE', res.devices)
          // 范围列表
          const apps = res?.apps?.find((item) => item.application_id === 'activity')
          const list = apps?.scopes
          commit('SET_CITY_LIST', list || [])
          // 如果当前没有city_id或者缓存的city_id已不在城市列表中，则塞一个默认的cityId
          if (
            !defaultCityID ||
            (defaultCityID && !list.some((city) => city.id === defaultCityID))
          ) {
            commit('SET_CITY_ID', list[0].id)
          } else {
            commit('SET_CITY_ID', defaultCityID)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout ({ commit }) {
      commit('SET_LOADING', true)
      IAM.signOut()
    }
  },
  modules: {
  }
})
