/**
 * Created by qianqian.li on 2016/11/17.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './page/Login';
import Entrance from './page/Entrance';
import Newest from './page/Newest';
import Product from './page/Product';
import AppCommentAll from './page/AppCommentAll';
import Personal from './page/Personal';
import HonorCurWeek from './page/HonorCurWeek';
import HonorDate from './page/HonorDate';
import AppDetail from './page/AppDetail';
import AppComment from './page/AppComment';
import AppCommentEdit from './page/AppCommentEdit';
import UserComment from './page/UserComment';
import HonorHistory from './page/HonorHistory';
import NotFound from './page/404';

Vue.use(VueRouter);

const router = new VueRouter({
    saveScrollPosition: true,
    transitionOnLoad: true
});

router.map({
    '/': {
        component: Login
    },
    '/login': {
        component: Login
    },
    '/entrance': {
        component: Entrance,
        subRoutes: {
            '/': {
                component: Newest
            },
            '/newest': {
                component: Newest
            },
            '/product': {
                component: Product
            },
            '/appCommentAll': {
                component: AppCommentAll
            },
            '/personal': {
                component: Personal
            }
        }
    },
    '/app/detail/:appId/:versionCode': {
        component: AppDetail
    },
    '/app/comment/:appId/:versionCode': {
        component: AppComment
    },
    '/app/comment/edit/:appId/:versionCode': {
        component: AppCommentEdit
    },
    '/user/comment/:type': {
        component: UserComment
    },
    '/honorCurWeek/:type': {
        component: HonorCurWeek
    },
    '/honor/date/:type': {
        component: HonorDate
    },
    '/honor/history/:type/:fromDate/:endDate': {
        component: HonorHistory
    },
    '*': { // not found handler
        component: NotFound
    }
});

export default router;