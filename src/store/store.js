import Vue from 'vue';
import Vuex from 'vuex';

import moduleExplorer from './modules/module-explorer.js';
import moduleTimeline from './modules/module-timeline.js';

require('es6-promise').polyfill();

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moduleExplorer,
        moduleTimeline
    }
});
