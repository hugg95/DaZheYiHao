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
const GoodsList = require('../components/GoodsList.react.jsx');
const NavBar = require('../components/NavBar.react.jsx');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const apiConfig = require('../config/api.json');
const url = require('url');

/**
 * render index page
 */
router.get('/', function(req, res, next) {

    // construct request url of get_categories
    let getCategories = url.format({
        hostname: apiConfig.host,
        port: apiConfig.port,
        protocol: 'http',
        pathname: apiConfig.get_categories
    });

    // construct request url of get_goods_list
    let getGoodsList = url.format({
        hostname: apiConfig.host,
        port: apiConfig.port,
        protocol: 'http',
        pathname: apiConfig.get_goods_list
    });

    getGoodsList = getGoodsList.replace(/\{\w+\}/, 1);

    let requests = {};
    requests['get_categories'] = request.getAsync(getCategories);
    requests['get_goods_list'] = request.getAsync(getGoodsList);

    Promise.props(requests).then(function(_res) {
        const getCategoriesRes = _res['get_categories'];
        const getGoodsListRes = _res['get_goods_list'];
        const categories = JSON.parse(getCategoriesRes[0]['body'])['data'];
        const goodsList = JSON.parse(getGoodsListRes[0]['body'])['data'];
        const c = React.renderToString(<NavBar />);
        const g = React.renderToString(<GoodsList goodsList={goodsList} />);

        res.render('index', {navbar: c, goodsList: g});

    }).catch(function(e) {

        console.log(e);
        res.render('index', {error: e});

    });

});

module.exports = router;

