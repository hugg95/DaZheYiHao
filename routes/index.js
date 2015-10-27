/**
 * index router
 *
 * @author victor li
 * @date 2015/10/12
 */

'use strict'

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect(301, '/posts');
});

module.exports = router;
