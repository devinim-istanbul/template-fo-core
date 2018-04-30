import components from '../components/platform';
import { configApi } from '../api';

const config = {
    apiUrl: 'http://localhost:8080'
};

const initialize = (
    PlatformStorage,
    PlatformModal,
    Logger,
) => {
    components.PlatformStorage = PlatformStorage;
    components.PlatformModal = PlatformModal;
    components.Logger = Logger;

    configApi(config.apiUrl);
};

export {
    initialize
};
