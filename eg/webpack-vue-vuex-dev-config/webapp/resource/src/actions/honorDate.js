/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    getHonorDateList: createAction(C.GET_HONOUR_DATE_LIST, Api.getHonorDateList)
}