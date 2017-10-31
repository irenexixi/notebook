/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getAppCommentList: createAction(C.GET_APP_COMMENT_LIST, Api.getAppCommentList),
    clearAppCommentList: createAction(C.CLEAR_APP_COMMENT_LIST)
}