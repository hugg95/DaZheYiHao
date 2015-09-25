'use strict'
const express = require('express');
const router = express.Router();
const React = require('react');
const GoodsList = require('../components/GoodsList.jsx');

/* GET home page. */
router.get('/', function(req, res, next) {
    var d = React.renderToString(<GoodsList/>);
    res.render('index', {goodsList: d});
});

module.exports = router;
