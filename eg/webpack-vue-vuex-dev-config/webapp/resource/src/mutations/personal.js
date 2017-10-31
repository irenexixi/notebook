/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    userInfo: {
        "userName": "",
        "unreachedNum": 0
    }
};
const mutations = {
    [C.GET_USER_INFO](state, {payload, error}){
        if(error){
            return;
        }
        state.userInfo = payload;
    },
    [C.SEND_LOGIN_OUT](state){
    }
};

export default{
    state,
    mutations
}
