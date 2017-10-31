/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    userCommentList: {
        items: []
    }
};
const mutations = {
    [C.GET_USER_COMMENT_LIST](state, {payload, error}){
        if(error){
            return;
        }
        state.userCommentList.items = state.userCommentList.items.concat(payload.items);
    },
    [C.CLEAR_USER_COMMENT_LIST](state){
        state.userCommentList.items = [];
    }
};

export default{
    state,
    mutations
}
