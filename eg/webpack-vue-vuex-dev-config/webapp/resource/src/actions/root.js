import * as C from '../constants/actions';
import Api, {createAction} from "../utils/request";

export default {
    showPageLoading: createAction(C.SHOW_PAGE_LOADING),
    hidePageLoading: createAction(C.HIDE_PAGE_LOADING),
    showErrorTip: createAction(C.SHOW_ERROR_TIP),
    // showTabNav: createAction(C.SHOW_TAB_NAV),
    // hideTabNav: createAction(C.HIDE_TAB_NAV),
    countDownload: createAction(C.COUNT_DOWNLOAD, Api.countDownload)
}