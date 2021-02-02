"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeEditModal = exports.openEditModal = void 0;

var openEditModal = function openEditModal(id) {
  return {
    type: 'OPEN_EDIT_MODAL',
    payload: {
      id: id
    }
  };
};

exports.openEditModal = openEditModal;

var closeEditModal = function closeEditModal() {
  return {
    typpe: 'CLOSE_EDIT_MODAL'
  };
};

exports.closeEditModal = closeEditModal;