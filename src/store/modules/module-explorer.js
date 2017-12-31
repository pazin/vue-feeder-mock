import dadosJobs from '../../dados/dados_dummy.js';
import dadosArestas from '../../dados/dados_arestas_dummy.js';


const state = {
    jobs : [],
    selectedJob : {},
    arestas : []
};

const mutations = {
    'SET_JOBS'(state, jobs){
        state.jobs = jobs;
    },
    'SET_ARESTAS'(state, arestas){
        state.arestas = arestas;
    },
    'SET_SELECTED_JOB'(state, jobSelected){
        state.selectedJob = jobSelected;
    }
};

const actions = {

    initJobs: ({commit}) => {
        commit('SET_JOBS', dadosJobs);
    },
    initArestas : (context) => {
        context.commit('SET_ARESTAS', dadosArestas);
    },
    selectJob: (context, jobName) => {

        const jobSelected = context.getters.findJobByName(jobName);

        context.commit('SET_SELECTED_JOB', jobSelected);
    }
};


const getters = {

    findJobByName: (state) => (name) => {
        return state.jobs.find(job => job.nome === name);
    },
    jobs : (state) => {
        return state.jobs;
    },
    jobSelecionado: (state) => {
        return state.selectedJob;
    },
    arestas : (state) => {
        return state.arestas;
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}
