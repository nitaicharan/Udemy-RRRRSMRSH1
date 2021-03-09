"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEntryRedux = exports.addEntryRedux = void 0;

var addEntryRedux = function addEntryRedux(payload) {
  return {
    type: 'ADD_ENTRY',
    payload: payload
  };
};

exports.addEntryRedux = addEntryRedux;

var removeEntryRedux = function removeEntryRedux(id) {
  return {
    type: 'REMOVE_ENTRY',
    payload: {
      id: id
    }
  };
};

exports.removeEntryRedux = removeEntryRedux;