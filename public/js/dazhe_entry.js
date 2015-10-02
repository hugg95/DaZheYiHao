var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var NavBar = require('../../components/NavBar.react.jsx');
var GoodsList = require('../../components/GoodsList.react.jsx');

var App = React.createClass({
    render: function() {
        return (
            <div></div>
        );
    }
});

var routes = (
    <Route handler={App}></Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<NavBar />, document.getElementById('js-navbar'));
});
