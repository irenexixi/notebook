import * as C from "../constants/actions";

const state = {
    userId: ''
};
const mutations = {
    [C.SEND_LOGIN](state, {payload}){
        state.userId = payload;
    }
};

export default{
    state,
    mutations
}