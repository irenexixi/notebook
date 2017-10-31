/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    appCommentList: {
        items: []
    }
};
const mutations = {
    [C.GET_APP_COMMENT_LIST](state, {payload, error}){
        if(error){
            return;
        }
        
        state.appCommentList.items = state.appCommentList.items.concat(payload.items);
    },

    [C.CLEAR_APP_COMMENT_LIST](state){
        state.appCommentList.items = [];
    }
};

export default{
    state,
    mutations
}
