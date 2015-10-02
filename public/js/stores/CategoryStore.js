/**
 * category store
 *
 * @author victor li
 * @date 2015/10/02
 */

'use strict'

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CategoryStore = assign({}, EventEmitter.prototype, {
    // todo
});

module.exports = CategoryStore;

