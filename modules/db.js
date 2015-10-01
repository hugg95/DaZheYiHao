/**
 * database connection module
 *
 * @author victor li
 * @date 2015/09/27
 */

'use strict'

const Sequelize = require('sequelize');
const dbConfig = require('../config/mysql.config.json');

let connection = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialet: 'mysql',
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    }
});

module.exports = connection;

