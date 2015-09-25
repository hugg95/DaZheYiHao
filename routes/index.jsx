'use strict'
const express = require('express');
const router = express.Router();
const react = require('react');

let GoodsList  = react.createClass({
    render: function() {
        return (
                <h3 style="color:red">Hello</h3>
            );
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;
