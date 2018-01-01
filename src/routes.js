import Home from './components/Home.vue';
import Explorer from './components/explorer/Explorer.vue';
import GraphViewer from './components/graph/GraphViewer.vue';
import TimelineViewer from './components/timeline/TimelineViewer.vue';

export const routes = [
    { path : '/', component : Home },
    { path : '/explorer', component : Explorer },
    { path : '/graphviewer', component : GraphViewer },
    { path : '/timeline', component : TimelineViewer },
];
