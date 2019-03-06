import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ElementUiTest from '@/components/ElementUiTest';
import AxiosTest from '@/components/AxiosTest';
import MarkdownTest from '@/components/MarkdownTest';
import VueMarkdownTest from '@/components/VueMarkdownTest';
import PushJsTest from '@/components/PushJs';
import Html2canvas from '@/components/Html2canvas';
import VueDraggableTree from '@/components/VueDraggableTree';
import JsXlsx from '@/components/JsXlsx';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/js-xlsx',
            name: 'JsXlsx',
            component: JsXlsx
        },
        {
            path: '/vue-draggable-tree',
            name: 'VueDraggableTree',
            component: VueDraggableTree
        },
        {
            path: '/html2canvas',
            name: 'Html2canvas',
            component: Html2canvas
        },
        {
            path: '/push-js-test',
            name: 'PushJsTest',
            component: PushJsTest
        },
        {
            path: '/vue-markdown-test',
            name: 'VueMarkdownTest',
            component: VueMarkdownTest
        },
        {
            path: '/markdown-test',
            name: 'MarkdownTest',
            component: MarkdownTest
        },
        {
            path: '/elementUiTest',
            name: 'ElementUiTest',
            component: ElementUiTest
        },
        {
            path: '/axiosTest',
            name: 'AxiosTest',
            component: AxiosTest
        },
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        }
    ]
});
