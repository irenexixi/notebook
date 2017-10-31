import Vue from 'vue';
import Vuex from 'vuex';
import {sync} from 'vuex-router-sync';
import router from './routes';
import store from './store/store';
import App from './App';

const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(Vuex);

sync(store, router);

router.start(App, '#root');