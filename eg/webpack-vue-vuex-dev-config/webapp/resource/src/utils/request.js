/**
 * Created by qianqian.li on 2016/4/22.
 */
import qs from 'querystring';
import fetch from 'isomorphic-fetch';
import 'es6-promise';
import * as API from '../constants/api';
import * as C from "../constants/actions";
import router from '../routes';
import store from '../store/store';
import {LOGIN_PATH} from "../constants/const";

const METHOD = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};


const request = (url, params, method = 'post', jsonType = false) => {
    var options = {
        headers: {
            'Content-Type': jsonType ? 'application/json' : 'application/x-www-form-urlencoded'
        },
        method: method,
        // credentials: 'include'
    };


    if (method !== METHOD.GET && params) {
        options.body = jsonType ? JSON.stringify(params) : qs.stringify(params)
    }
    if (method === METHOD.GET && params) {
        url += ('?' + qs.stringify(params));
    }

    return fetch(url, options).then(checkRespStatus).catch(noConnect);
};

const noConnect = (resp) => {
    resp.msg && store.dispatch(C.SHOW_ERROR_TIP, resp.msg);
};

// check resp status
const checkRespStatus = (respPromise) => {

    if (respPromise.status !== 200) {
        // respPromise.msg = ERROR_TIP;
        return Promise.reject(respPromise);
    }

    return respPromise.json().then( resp => {
        return new Promise((resolve, reject) => {
            if (resp && resp.code === API.CODE_SUCCESS) {
                if (!resp.data) {
                    resp.data = true;
                }
                resolve(resp.data);

            } else if (resp && resp.code === API.CODE_SESSION_EXPIRE) {
                window.config.currentUser = '';
                router.go(LOGIN_PATH);

            } else {
                reject(resp);
                resp.msg && store.dispatch(C.SHOW_ERROR_TIP, resp.msg);

            }
        });
    });
};

export const createAction = (type, payloadCreator, metaCreator) => {
    const identity = (...args) => args[0];
    const isFunc = (fn) => typeof(fn) === 'function';
    const isPromise = obj => typeof(obj) === 'object' && isFunc(obj.then);
    const finalPayloadCreator = isFunc(payloadCreator) ? payloadCreator : identity;

    return ({dispatch}, ...args) => {
        const payload = finalPayloadCreator(...args);
        const action = {type, payload};

        if (isFunc(metaCreator)) {
            action.meta = metaCreator(...args);
        }

        if (isPromise(payload)) {
            return payload.then(result => {
                dispatch(type, Object.assign(action, {payload: result}));
                return result;
            }).catch(error => {
                //dispatch(type, Object.assign(action, {error: true, msg: error.msg}));
            });
        }

        return dispatch(type, Object.assign(action, {payload}));
    };
};

export default {
    sendLogin: (params) => request(API.SEND_LOGIN, params, METHOD.POST, true),
    getUserInfo: (params) => request(API.GET_USER_INFO, params, METHOD.GET),
    sendLoginOut: (params) => request(API.SEND_LOGIN_OUT, params, METHOD.POST),

    getNewestAppList: (params) => request(API.GET_APP_LIST, params, METHOD.GET), //更新列表和产品列表共用
    getAppList: (params) => request(API.GET_APP_LIST, params, METHOD.GET), //更新列表和产品列表共用

    getAppCommentList: (params) => request(API.GET_APP_COMMENT_LIST, params, METHOD.GET),
    getHonorList: (params) => request(API.GET_HONOUR_LIST, params, METHOD.GET),
    getHonorDateList: (params) => request(API.GET_HONOR_DATE_LIST, params, METHOD.GET),
    getCurWeekDateList: (params) => request(API.GET_CURRENT_WEEK_DATE, params, METHOD.GET),
    countDownload: (params) => request(API.COUNT_DOWNLOAD, params, METHOD.POST, true),
    getAppDetail: (params) => request(API.GET_APP_DETAIL, params, METHOD.GET),
    getUserCommentList: (params) => request(API.GET_USER_COMMENT_LIST, params, METHOD.GET),

    getHistoryHonourList: (params) => request(API.GET_HISTORY_HONOUR_LIST, params, METHOD.GET),
    uploadImg: (params) => request(API.UPLOAD_IMG, params, METHOD.GET),
    saveComment: (params) => request(API.SAVE_COMMENT, params, METHOD.POST, true)
};