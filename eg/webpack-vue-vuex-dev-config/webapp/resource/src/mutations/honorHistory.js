/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    honorHistoryList: {
        items: []
    }
};
const mutations = {
    [C.GET_HONOUR_HISTORY](state, {payload, error}){
        if(error){
            return;
        }
        state.honorHistoryList.items = state.honorHistoryList.items.concat(payload.items);
    },

    [C.CLEAR_HONOUR_HISTORY](state){
        state.honorHistoryList.items = [];
    }
};

export default{
    state,
    mutations
}
