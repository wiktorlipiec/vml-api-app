export default class ConfigActions{

    static CONFIG_START = 'CONFIG_START';
    static CONFIG_SET = 'CONFIG_SET';
    static CONFIG_FAIL = 'CONFIG_FAIL';

    static configStart = () => {
        return {
            type: ConfigActions.CONFIG_START
        };
    };

    static configSet = config => {
        return {
            type: ConfigActions.CONFIG_SET,
            configSetup: config,
        };
    };

    static configFail = (error) => {
        return {
            type: ConfigActions.CONFIG_FAIL,
            error: error
        };
    };

}