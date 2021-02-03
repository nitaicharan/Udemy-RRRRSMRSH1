"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _entries = _interopRequireDefault(require("../reducers/entries.reducer"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var configureStore = function configureStore() {
  return (0, _redux.createStore)((0, _redux.combineReducers)({
    entries: _entries["default"]
  }), (0, _reduxDevtoolsExtension.composeWithDevTools)());
};

var _default = configureStore;
exports["default"] = _default;