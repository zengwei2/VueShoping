import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
    // 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var list = JSON.parse(localStorage.getItem('list') || '[]')
var car = JSON.parse(localStorage.getItem('car') || '[]')
var userlist = JSON.parse(localStorage.getItem('userlist') || '[]')

var state = {
    list: list, //id传值
    car: car, //将购物车中的商品数据，用数组存储起来，在car中存储为对象，
    //对象形式为{id:商品的id,count:要购买的数量,price商品的价格,seleced:false}
    /* seleced: true */ //点击当前商品是否选中   
    userlist:userlist //用户信息
}

var mutations = {
    getList(state, info) {
        /* console.log(info) */
        state.list.push(info)
        localStorage.setItem('list', JSON.stringify(state.list))
    },
    //传给购物车的商品信息
    addToCar(state, goodsinfo) {
        state.car.push(goodsinfo)
            // localStorage.setItem('goodsinfo', JSON.stringify(state.car))
        localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
        state.car.some(item => { //some方法在满足条件时返回true,剩余的元素不再执行
            console.log('item.id:---' + item.id)
            console.log('goodsinfo.id:---' + goodsinfo.id)
            if (item.id == goodsinfo.id) {
                console.log('goodsinfo.count:---' + goodsinfo.count)
                item.number = parseInt(goodsinfo.count)
                return true;
            }
        })

        // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
        localStorage.setItem('car', JSON.stringify(state.car))
    },
    //是否被选中
    updateGoodsSelected(state, info) {
        state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            // 把最新的 所有购物车商品的状态保存到 store 中去
        localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFromCar(state, id) {
        // 根据Id，从store 中的购物车中删除对应的那条商品数据
        state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true;
                }
            })
            // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
        localStorage.setItem('car', JSON.stringify(state.car))
    },
    //将用户信息存入userlist中
    addUserlist(state,userlists){
        state.userlist.push(userlists)
        //将注册信息存入userlist中
        localStorage.setItem('userlist', JSON.stringify(state.userlist))
    }

}
var getters = {
    getAllCount(state) {
        var c = 0;
        state.car.forEach(item => {
            c += item.number
        });
        return c
    },
    getCar(state) {
        return state.car;
    },
    //获取商品初始化（刚点击进入购物车后）的数量
    getGoodsCount(state) {
        var o = {};
        state.car.forEach(item => {
            o[item.id] = item.number
        })
        return o
    },
    //获取商品是否被选中
    getGoodsSelected(state) {
        var o = {}
        state.car.forEach(item => {
            o[item.id] = item.seleced
        })
        return o;
    },
    getListValue(state) {
        return state.list;
    },
    getGoodsCountAndAmount(state) {
        var o = {
            count: 0, //勾选的数量
            amount: 0 //勾选的总价
        }
        state.car.forEach(item => {
            /* if (item.selected) { */
            o.count += item.number;
            o.amount += item.price * item.number;
            /* } */
        })
        return o
    },
    //获取username的值
    getUserName(state){
        var o = {
            username:'' 
        }
        state.userlist.forEach(item=>{
            console.log('item.username'+item.username)
            o.username = item.username;
        })
        return o;
    },
    //获取userlist的值
    getUserList(state){
        return state.userlist;
    }
}
var actions = {
    incNum(context) {
        context.commit('incCount')
    },
    decNum(context) {
        context.commit('decCount')
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
export default store;