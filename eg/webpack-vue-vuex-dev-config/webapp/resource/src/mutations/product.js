/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    appList: {
        items: []
    }
};
const mutations = {
    [C.GET_APP_LIST](state, {payload, error}){
        if(error){
            return;
        }
        state.appList.items = state.appList.items.concat(payload.items);
    },
    [C.CLEAR_APP_LIST](state){
        state.appList.items = [];
    }
};

export default{
    state,
    mutations
}
