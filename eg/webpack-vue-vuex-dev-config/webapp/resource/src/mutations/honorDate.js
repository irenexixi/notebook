/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    honorDateList: []
};
const mutations = {
    [C.GET_HONOUR_DATE_LIST](state, {payload, error}){
        if(error){
            return;
        }
        state.honorDateList = payload;
    }
};

export default{
    state,
    mutations
}
