/**
 * Created by qianqian.li on 2016/11/16.
 */
import Vue from "vue";
import Vuex from "vuex";
import actions from "../actions";
import mutations from "../mutations";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({
    actions,
    modules: mutations,
    strict: false
});
