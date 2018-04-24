"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = undefined;

var _types = require("../types");

var _index = require("../../index");

var _platform = require("../../config/platform");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var login = exports.login = function login(user) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _platform.config.localStorage.setItem('@ServeMe:user', JSON.stringify(user));

                        case 2:
                            dispatch({
                                type: _types.SESSION.LOGIN,
                                payload: user
                            });

                        case 3:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};