// https://github.com/fromAtoB/vue-a2b
import Vue from 'vue'
import VueAB from 'vue-a2b'
Vue.use(VueAB)

export default ({ app, store }) => {
  // 【PC】ABテストのフラグが立ってたらABパターンを決める
  if (process.env.pcAbTestFlag) {
    // ABを振り分けてcontextに追加
    app.pcAbTestPattern = VueAB.abtest('pcAbTestPattern', { A: 50, B: 50 })

    // vuexにグローバル変数として持つ
    store.commit('ab-test/setPcAbTestPattern', app.pcAbTestPattern)
  }

  // 【SP】ABテストのフラグが立ってたらABパターンを決める
  if (process.env.spAbTestFlag) {
    // ABを振り分けてcontextに追加
    app.spAbTestPattern = VueAB.abtest('spAbTestPattern', { A: 50, B: 50 })

    // vuexにグローバル変数として持つ
    store.commit('ab-test/setSpAbTestPattern', app.spAbTestPattern)
  }
}
