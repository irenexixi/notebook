/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getHonorList: createAction(C.GET_HONOUR_CUR_WEEK_LIST, Api.getHonorList),
    clearHonorList: createAction(C.CLEAR_HONOUR_CUR_WEEK_LIST),
    getCurWeekDate: createAction(C.GET_CURRENT_WEEK_DATE, Api.getCurWeekDateList)
}