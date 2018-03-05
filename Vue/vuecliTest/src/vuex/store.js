import Vue from 'vue';
import Vuex from 'vuex';
    
//使用vuex
Vue.use(Vuex);

//需要用状态管理的属性
const state={
    count:3,
}

//改变属性方法
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count --;
    }
}

//在输出前计算属性
const getters = {
    count2:(state)=> state.count +=100
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
})
