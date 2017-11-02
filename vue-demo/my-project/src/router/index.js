import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUiTest from '@/components/ElementUiTest'
import AxiosTest from '@/components/AxiosTest'
import MarkdownTest from '@/components/MarkdownTest'
import VueMarkdownTest from '@/components/VueMarkdownTest'
import PushJsTest from '@/components/PushJs'


Vue.use(Router)

export default new Router({
    routes: [
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
        },
    ]
})
