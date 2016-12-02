import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 模拟假数据
const state = {
    totalTime: 0,
    list: [{
        name: '李二狗',
        avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        date: '2016-12-25',
        totalTime: '6',
        comment: '圣诞节，和女朋友约会(pao)，需要6个小时'
    }]
}

export default new Vuex.Store({
    state
})