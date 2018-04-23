'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sessionReducer = require('./sessionReducer');

var _sessionReducer2 = _interopRequireDefault(_sessionReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
    sessionStore: _sessionReducer2.default
};

exports.default = reducers;