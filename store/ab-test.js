export const state = () => ({
  isPcTestWorking: process.env.pcAbTestFlag,
  isSpTestWorking: process.env.spAbTestFlag,
  pcAbTestPattern: '',
  spAbTestPattern: '',
})

export const getters = {
  // パターン取得
  getPcPattern(state) {
    return state.pcAbTestPattern.toUpperCase()
  },
  getSpPattern(state) {
    return state.spAbTestPattern.toUpperCase()
  },
  // 電話番号取得
  getPcTelNumber(state) {
    const pcPhoneNumber = {
      A: process.env.pcTel,
      B: process.env.pcbTel,
    }
    return state.isPcTestWorking
      ? pcPhoneNumber[state.pcAbTestPattern]
      : pcPhoneNumber.A
  },
  getSpTelNumber(state) {
    const spPhoneNumber = {
      A: process.env.spTel,
      B: process.env.spbTel,
    }
    return state.isSpTestWorking
      ? spPhoneNumber[state.spAbTestPattern]
      : spPhoneNumber.A
  },
}

export const mutations = {
  setPcAbTestPattern(state, pattern) {
    state.pcAbTestPattern = pattern
  },
  setSpAbTestPattern(state, pattern) {
    state.spAbTestPattern = pattern
  },
}
