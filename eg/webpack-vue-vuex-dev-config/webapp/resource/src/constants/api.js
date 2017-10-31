/**
 * Created by qianqian.li on 2016/11/17.
 */
export const ROOT_PATH = "http://10.115.112.142:3618";
export const CODE_SUCCESS = 200;
export const CODE_SESSION_EXPIRE = 1001;

// const getApi = (url) => ROOT_PATH + '/api' + url;
// const getApi2 = (url) => ROOT_PATH + url;
const getApi = (url) => `${window.config.context}/api` + url;
// export const SEND_LOGIN = getApi('/login');
export const SEND_LOGIN = `${window.config.context}/login`;
export const SEND_LOGIN_OUT = getApi('/user/logout');
export const GET_NEWEST_APP_LIST = getApi('/app/list');
export const GET_APP_LIST = getApi('/app/list');
export const GET_APP_COMMENT_LIST = getApi('/app/comment/list');
export const GET_HONOUR_LIST = getApi('/honour/list');
export const GET_CURRENT_WEEK_DATE = getApi('/honourList/currentWeekDate');
export const GET_HONOR_DATE_LIST = getApi('/date/list');
export const GET_HISTORY_HONOUR_LIST = getApi('/history/honour/list');
export const COUNT_DOWNLOAD = getApi('/download');
export const GET_USER_COMMENT_LIST = getApi('/user/comment/list');

export const GET_APP_DETAIL = getApi('/app/view');
export const GET_USER_INFO = getApi('/user/info');

export const UPLOAD_IMG = getApi('/user/comment/uploadImage');
export const SAVE_COMMENT = getApi('/user/comment/save');
