const config = {
    localStorage: {}
};

const configPlatformItems = (
    localAsyncStorage
) => {
    config.localStorage = localAsyncStorage;
};

export { configPlatformItems, config };
