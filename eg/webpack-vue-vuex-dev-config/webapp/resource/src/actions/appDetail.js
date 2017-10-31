/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getAppDetail: createAction(C.GET_APP_DETAIL, Api.getAppDetail)
}