/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    appCommentAllList: {
        items: []
    }
};
const mutations = {
    [C.GET_APP_COMMENT_ALL_LIST](state, {payload, error}){
        if(error){
            return;
        }
        
        state.appCommentAllList.items = state.appCommentAllList.items.concat(payload.items);
    },
    [C.CLEAR_APP_COMMENT_ALL_LIST](state){
        state.appCommentAllList.items = [];
    }
};

export default{
    state,
    mutations
}
