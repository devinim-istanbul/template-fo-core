import restClient from './restClient';

let api = {};

const configApi = (
    url
) => {
    api = restClient(url);
};

export {
    api,
    configApi
};
