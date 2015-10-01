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
            <img src={this.props.goods.picUrl} />
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
