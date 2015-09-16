var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

var DaZheApp = React.createClass({
    render: function() {
        return (
            <div>
                <h3>hello world</h3>
            </div>
        );
    }
});

var routes = (
    <Route handler={DaZheApp}></Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root />, document.getElementById('app'));
});
