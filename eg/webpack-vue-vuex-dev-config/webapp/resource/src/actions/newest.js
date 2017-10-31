/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getNewestAppList: createAction(C.GET_NEWEST_APP_LIST, Api.getNewestAppList),
    clearNewestAppList: createAction(C.CLEAR_NEWEST_APP_LIST)
}