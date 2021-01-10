const pcPhoneNumber = {
  A: process.env.pcTel,
  B: process.env.pcbTel,
}
const spPhoneNumber = {
  A: process.env.spTel,
  B: process.env.spbTel,
}

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
    return state.isPcTestWorking
      ? pcPhoneNumber[state.pcAbTestPattern]
      : pcPhoneNumber.A
  },
  getSpTelNumber(state) {
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
