/**
 * Created by qianqian.li on 2016/11/17.
 */
import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default{
    saveComment: createAction(C.SAVE_COMMENT, Api.saveComment),
    uploadImg: createAction(C.UPLOAD_IMG, Api.uploadImg),
    addUploadedImg: createAction(C.ADD_UPLOADED_IMG),
    removeUploadedImg: createAction(C.REMOVE_UPLOADED_IMG),
    clearUploadedImg: createAction(C.CLEAR_UPLOADED_IMG)
}