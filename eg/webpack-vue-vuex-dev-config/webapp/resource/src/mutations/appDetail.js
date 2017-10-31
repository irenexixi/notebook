/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    appDetail: {
        
    }
};
const mutations = {
    [C.GET_APP_DETAIL](state, {payload, error}){
        if(error){
            return;
        }
        state.appDetail = payload;
    }
};

export default{
    state,
    mutations
}
