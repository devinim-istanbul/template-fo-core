"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    localStorage: {}
};

var configPlatformItems = function configPlatformItems(localAsyncStorage) {
    config.localStorage = localAsyncStorage;
};

exports.configPlatformItems = configPlatformItems;
exports.config = config;