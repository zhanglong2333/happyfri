import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
Vue.use(vuex);
export default new vuex.Store({
  state,
  getters: {

  },
  mutations: {
    //初始化数据
    initData() {
      state.level = '第一周',
        state.itemNum = 1,
        state.answerid = []

    },
    //答案id放入数组
    pushAnswerId(state, id) {
      state.answerid.push(id);
    },
    //题目数量增加
    addDetailNum() {
      state.itemNum += 1;
    }
  },
  actions: {
    addItemNum(context, id) {
      //判断是否是最后一题
      if (state.itemNum < state.itemDetail.length) {
        state.itemNum += 1;
      }
      //更改当前题数,把答案id放入数组中
      context.commit('pushAnswerId', id)
    },
    initDatas(context) {
      context.commit('initData')
    }
  }
})
