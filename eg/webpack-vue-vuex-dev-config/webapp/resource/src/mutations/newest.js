/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from "../constants/actions";

const state = {
    newestAppList: {
        items: []
    }
};
const mutations = {
    [C.CLEAR_NEWEST_APP_LIST](state){
        state.newestAppList.items = [];
    },

    [C.GET_NEWEST_APP_LIST](state, {payload, error}){
        if(error){
            return;
        }
        var object = {
            "items": [
                {
                    "appId": "1",
                    "icon": "@image()",
                    "appName": "Seek Daily",
                    "versionCode": "V1.2.1",
                    "createdTime": "2016-11-09",
                    "description": "流程调整....",
                    "versionCount": 30,
                    "commentCount": 1006,
                    "downloadUrl": "https://play.google.com/store/apps/details?id=com.Mainews.news"
                }
            ]
        };

        var other = {
            "items": [
                {
                    "appId": "2",
                    "icon": "@image()",
                    "appName": "Seek Daily",
                    "versionCode": "V1.2.1",
                    "createdTime": "2016-11-09",
                    "description": "流程调整....",
                    "versionCount": 30,
                    "commentCount": 1006,
                    "downloadUrl": "https://play.google.com/store/apps/details?id=com.Mainews.news"
                }
            ],
            "tatalCount": 30,
            "pageSize": 3,
            "pageNo": 2,
            "totalPage": 10
        };
        // console.log(object.items.concat(other.items));
        state.newestAppList.items = state.newestAppList.items.concat(payload.items);
        // console.log(state.newestAppList);
    }
};

export default{
    state,
    mutations
}
