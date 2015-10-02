/**
 * Goods list component
 *
 * @author victor li
 * @date 2015/09/25
 */

'use strict'

const React = require('react');

const Goods = React.createClass({

    render: function() {
        return (
            <div className="thumbnail">
                <img src={this.props.goods.picUrl} />
                <div className="caption">
                    <h3>{this.props.goods.title}</h3>
                    <p>{this.props.goods.descSummary}</p>
                </div>
            </div>
        );
    }

});

const GoodsList = React.createClass({

    render: function() {
        const goodsList = this.props.goodsList;

        return (
            <div>
                {goodsList.map(function(goods) {
                    return <Goods goods={goods} />
                })}
            </div>
        );
    }

});

module.exports = GoodsList;
