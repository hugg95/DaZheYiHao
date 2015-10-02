/**
 * Category filter
 *
 * @author victor li
 * @date 2015/09/27
 */

'use strict'

const React = require('react');

let Category = React.createClass({
    render: function() {
        return (
            <li className="category-item">
                <a href="#">{this.props.category.name}</a>
            </li>
        );
    }
});

let CategoryFilter = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-3 category-filter">
                    <ul className="list-unstyled">
                        {
                            this.props.categories.map(function(category) {
                                return <Category category={category} />
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = CategoryFilter;

