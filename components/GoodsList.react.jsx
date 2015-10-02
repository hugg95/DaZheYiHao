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
            <div className="col-md-6 goods-item">
                <div key={this.props.goods.id} className="row">
                    <div className="col-md-3">
                        <a href="#" className="thumbnail">
                            <img className="img-responsive" src={this.props.goods.picUrl} />
                        </a>
                    </div>
                    <div className="col-md-9">
                        <div className="caption">
                            <h3>{this.props.goods.title}</h3>
                            <p>{this.props.goods.descSummary}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

const Row = React.createClass({

    render: function() {
        return (
            <div className="row">
                {
                    this.props.row.map(function(item) {
                        return <Goods goods={item} />
                    })
                }
            </div>
        );
    }

});

const GoodsList = React.createClass({

    render: function() {
        const goodsList = this.props.goodsList;
        let result = [], temp = [];
        goodsList.forEach(function(item){
            if (temp.length >= 2) {
                result.push(temp);
                temp = [];
            }
            temp.push(item);
        });

        return (
            <div>
                {
                    result.map(function(row) {
                        return <Row row={row} />
                    })
                }
            </div>
        );
    }

});

module.exports = GoodsList;
