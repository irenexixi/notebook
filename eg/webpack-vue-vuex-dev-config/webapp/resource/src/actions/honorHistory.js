/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getHonorHistoryList: createAction(C.GET_HONOUR_HISTORY, Api.getHonorList),
    clearHonorHistoryList: createAction(C.CLEAR_HONOUR_HISTORY)
}