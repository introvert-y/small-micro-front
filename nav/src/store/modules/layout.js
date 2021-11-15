const state = {
  sidebar: {
    opened: true,
    withoutAnimation: false,
  },
};

const mutations = {
  TOGGLE_SIDEBAR(state, withoutAnimation) {
    const opened = !state.sidebar.opened;
    document.documentElement.style.setProperty('--navbar-width', getComputedStyle(document.documentElement).getPropertyValue(opened ? '--navbar-open-width' : '--navbar-close-width'));
    state.sidebar.opened = opened;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  InitGlobeCsslWidthByOpen(state) {
    document.documentElement.style.setProperty('--navbar-width', getComputedStyle(document.documentElement).getPropertyValue(state.sidebar.opened ? '--navbar-open-width' : '--navbar-close-width'));
  }
}


const actions = {
  ToggleSideBar({ commit }, withoutAnimation) {
    commit('TOGGLE_SIDEBAR', withoutAnimation);
  },
  InitGlobeCsslWidth({ commit }, withoutAnimation) {
    commit('InitGlobeCsslWidthByOpen', withoutAnimation);
  },
};

export default {
  state,
  mutations,
  actions
};