/**
 * index page
 *
 * @author victor li
 * @date 2015/10/01
 */

'use strict'

const express = require('express');
const router = express.Router();
const React = require('react');
const GoodsList = require('../components/GoodsList.jsx');
const CategoryFilter = require('../components/CategoryFilter.jsx');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const apiConfig = require('../config/api.json');
const url = require('url');

/**
 * render index page
 */
router.get('/', function(req, res, next) {

    // construct request url of get_goods_list
    let getGoodsList = url.format({
        hostname: apiConfig.host,
        port: apiConfig.port,
        protocol: 'http',
        pathname: apiConfig.get_goods_list
    });

    getGoodsList = getGoodsList.replace(/\{\w+\}/, 1);

    // execute request
    request.getAsync(getGoodsList).then(function(_res) {
        let resBody = _res[0].body;
        resBody = JSON.parse(resBody);
        const goodsList = resBody.data;
        const c = React.renderToString(<CategoryFilter/>);
        const d = React.renderToString(<GoodsList goodsList={goodsList} />);
        res.render('index', {categoryFilter: c, goodsList: d});
    }).catch(function(e) {
        // todo
        console.log(e);
        res.render('index', {error: e});
    });

});

module.exports = router;

