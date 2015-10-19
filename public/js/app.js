/**
 * app entry
 *
 * @author victor li
 * @date 2015/10/02
 */

'use strict'

var $ = require('jquery');
var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var NavBar = require('../../components/NavBar.react.jsx');
var GoodsList = require('../../components/GoodsList.react.jsx');

// var App = React.createClass({
//     render: function() {
//         return (
//             <div></div>
//         );
//     }
// });

// var routes = (
//     <Route handler={App}></Route>
// );

//var navs = JSON.parse($('#js-navs').text());


//Router.run(routes, Router.HashLocation, function(Root) {
    //React.render(<NavBar navs={navs} />, document.getElementById('js-navbar'));
//});
