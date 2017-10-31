/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions"

/*imageList: [{
 "src": "http://osg-test.tclclouds.com/swift/v1/gl3/betafeedback/20161124/19/05/42/mazda-0a.jpg",
 "w": 0,
 "h": 0
 }]*/

const state = {
    imageList: []
};

const mutations = {
    [C.SAVE_COMMENT](state, {payload}){
    },

    [C.ADD_UPLOADED_IMG](state, {payload, error}){
        if(error){
            return;
        }
        let arr = [payload];
        state.imageList = state.imageList.concat(arr);
    },

    [C.CLEAR_UPLOADED_IMG](state, {payload}){
        state.imageList = [];
    },

    [C.REMOVE_UPLOADED_IMG](state, {payload, error}){
        if(error){
            return;
        }
        
        let newArr = state.imageList.filter((item)=> {
            return item.src !== payload.src;
        });

        state.imageList = newArr;
    }
};

export default{
    state,
    mutations
}
