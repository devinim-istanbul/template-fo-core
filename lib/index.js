"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configPlatformItems = exports.reducers = exports.actions = undefined;

var _actions = require("./redux/actions");

var actions = _interopRequireWildcard(_actions);

var _reducers = require("./redux/reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _platform = require("./config/platform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.actions = actions;
exports.reducers = _reducers2.default;
exports.configPlatformItems = _platform.configPlatformItems;