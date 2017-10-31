/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getAppCommentAllList: createAction(C.GET_APP_COMMENT_ALL_LIST, Api.getAppCommentList),
    clearAppCommentAllList: createAction(C.CLEAR_APP_COMMENT_ALL_LIST)
}