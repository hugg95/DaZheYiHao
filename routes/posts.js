/**
 * posts router
 *
 * @author victor li
 * @date 2015/10/01
 */

'use strict'

const express = require('express');
const router = express.Router();
const React = require('react');
const GoodsList = require('../components/GoodsList.react.jsx');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const apiConfig = require('../config/api.conf.json');
const url = require('url');

/**
 * render posts list page
 */
router.get('/', function(req, res, next) {
    // construct request url of get_goods_list
    let getGoodsList = url.format({
        hostname: apiConfig.host,
        port: apiConfig.port,
        protocol: 'http',
        pathname: apiConfig.get_goods_list
    });

    const countGoodsTotal = url.format({
        hostname: apiConfig.host,
        port: apiConfig.port,
        protocol: 'http',
        pathname: apiConfig.count_goods_totle
    });

    getGoodsList = getGoodsList.replace(/\{\w+\}/, 1);

    let requests = {};
    requests['get_goods_list'] = request.getAsync(getGoodsList);

    Promise.props(requests).then(function(_res) {
        const getGoodsListRes = _res['get_goods_list'];
        const goodsList = JSON.parse(getGoodsListRes[0]['body'])['data'];
        const g = React.renderToString(<GoodsList goodsList={goodsList} />);
        res.render('index', {goodsList: g});
    }).catch(function(e) {
        console.log(e);
        res.render('index', {error: e});

    });

});

module.exports = router;

