import * as C from "../constants/actions";

const state = {
    isLoading: false,
    isShowErrorTip: false,
    errorTipText: '系统错误！'
};
const mutations = {

    [C.SHOW_PAGE_LOADING](state){
        state.isLoading = true;
    },

    [C.HIDE_PAGE_LOADING](state){
        state.isLoading = false;
    },

    [C.SHOW_ERROR_TIP](state, res){
        state.isShowErrorTip = true;
        state.errorTipText = res;
    },

    [C.COUNT_DOWNLOAD](state){
    }
};

export default{
    state,
    mutations
}