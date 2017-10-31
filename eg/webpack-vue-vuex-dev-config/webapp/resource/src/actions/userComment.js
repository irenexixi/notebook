/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getUserCommentList: createAction(C.GET_USER_COMMENT_LIST, Api.getUserCommentList),
    clearUserCommentList: createAction(C.CLEAR_USER_COMMENT_LIST)
}