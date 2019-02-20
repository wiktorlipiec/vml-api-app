import ConfigActions from './actions';

const INITIAL_STATE = {
    config: {},
    loading: false,
    error: null,
}

function ConfigReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ConfigActions.CONFIG_START:
            return state = {
                ...state,
                loading: true,
            };
        case ConfigActions.CONFIG_SET:
            return state = {
                ...state,
                loading: false,
                config: action.configSetup,
            };
        case ConfigActions.CONFIG_FAIL:
            return state = {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default ConfigReducer;