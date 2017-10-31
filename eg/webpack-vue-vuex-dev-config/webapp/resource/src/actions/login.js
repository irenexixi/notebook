/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    sendLogin: createAction(C.SEND_LOGIN, Api.sendLogin)
}