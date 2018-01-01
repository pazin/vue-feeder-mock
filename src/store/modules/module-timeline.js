import dadosEventos from '../../dados/dados_eventos_dummy.js';

const state = {
    eventos : []
};

const mutations = {
    'SET_EVENTOS'(state, eventos){
        state.eventos = eventos;
    }
};

const actions = {

    initEventos: ({commit}) => {
        commit('SET_EVENTOS', dadosEventos);
    }
};


const getters = {
    eventos : (state) => {
        return state.eventos;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
