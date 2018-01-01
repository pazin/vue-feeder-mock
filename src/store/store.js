import Vue from 'vue';
import Vuex from 'vuex';

import moduleExplorer from './modules/module-explorer.js';
import moduleTimeline from './modules/module-timeline.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moduleExplorer,
        moduleTimeline
    }
});
