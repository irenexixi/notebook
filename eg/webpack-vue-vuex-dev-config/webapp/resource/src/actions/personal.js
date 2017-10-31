import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default {
    getUserInfo: createAction(C.GET_USER_INFO, Api.getUserInfo),
    sendLoginOut: createAction(C.SEND_LOGIN_OUT, Api.sendLoginOut)
}