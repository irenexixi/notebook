/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    honorCurWeekList: {
        items: []
    },
    curWeekDate:  {}
};
const mutations = {
    [C.GET_HONOUR_CUR_WEEK_LIST](state, {payload, error}){
        if(error){
            return;
        }
        state.honorCurWeekList.items = state.honorCurWeekList.items.concat(payload.items);
    },

    [C.CLEAR_HONOUR_CUR_WEEK_LIST](state) {
        state.honorCurWeekList.items = [];
    },

    [C.GET_CURRENT_WEEK_DATE](state, {payload, error}) {
        if(error){
            return;
        }
        state.curWeekDate = payload
    }
};

export default{
    state,
    mutations
}
