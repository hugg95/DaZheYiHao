/**
 * generate navbar react string middleware
 *
 * @author victor li
 * @date 2015/10/17
 */

'use strict'

const React = require('react');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const NavBar = require('../components/NavBar.react.jsx');
const apiConfig = require('../config/api.conf.json');
const navigation = require('../config/navigation.conf.json');
const url = require('url');

module.exports = function() {
    // construct request url of get_categories
    const getCategories = url.format({
        hostname: apiConfig.host,
        port: apiConfig.port,
        protocol: 'http',
        pathname: apiConfig.get_categories
    });

    let requests = {};
    requests['get_categories'] = request.getAsync(getCategories);
    return Promise.props(requests).then(function(_res) {
        const getCategoriesRes = _res['get_categories'];
        const categories = JSON.parse(getCategoriesRes[0]['body'])['data'];
        // append categories list in navigation
        navigation.map(function(item) {
            if (item.en_name === 'category') {
                item.dropdown = categories;
            }
        });
        return React.renderToString(<NavBar navs={navigation} />);
    }).catch(function(e) {
        throw new Error(e);
    });
};
