/**
 * Created by qianqian.li on 2016/11/17.
 */
import rootActions from './root';
import loginActions from './login';
import personalActions from './personal';
import newestActions from './newest';
import productActions from './product';
import appCommentAllActions from './appCommentAll';

import honorCurWeekActions from './honorCurWeek';
import honorDateActions from './honorDate';

import appDetailActions from './appDetail';
import appCommentActions from './appComment';
import userCommentActions from './userComment';
import honorHistoryActions from './honorHistory';
import appCommentEditActions from './appCommentEdit';

export default {
    ...rootActions,
    ...loginActions,
    ...personalActions,
    ...newestActions,
    ...productActions,
    ...appCommentAllActions,
    ...honorCurWeekActions,
    ...honorDateActions,
    ...appDetailActions,
    ...appCommentActions,
    ...userCommentActions,
    ...honorHistoryActions,
    ...appCommentEditActions
}