/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getAppList: createAction(C.GET_APP_LIST, Api.getAppList),
    clearAppList: createAction(C.CLEAR_APP_LIST)
}