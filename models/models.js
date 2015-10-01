/**
 * Category
 *
 * @author victor li
 * @date 2015/09/27
 */

'use strict'

const conn = require('../modules/db');
const Sequelize = require('sequelize');

let Category = conn.define('Category', {
    id: {Sequelize.INTEGER, primaryKey: true},
    name: {Sequelize.STRING, unique: true},
    active: {Sequelize.BOOLEAN}
});

module.exports.Category = category;
