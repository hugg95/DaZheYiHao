/**
 * Goods list component
 *
 * @author victor li
 * @date 2015/09/25
 */

'use strict'

const React = require('react');

const Goods = React.createClass({

    directToTargetSite: function(targetLink) {
        //if (window)
        //    window.open(targetLink);
    },

    render: function() {
        return (
            <div key={this.props.goods.id} className="col-md-12 goods-item">
                <div className="row">
                    <div className="col-md-3">
                        <a href="#" className="thumbnail">
                            <img className="img-responsive" src={this.props.goods.picUrl} />
                        </a>
                    </div>
                    <div className="col-md-9">
                        <div className="content-area">
                            <a className="goods-title">{this.props.goods.title}</a>
                            <div>{this.props.goods.descSummary}</div>
                        </div>
                        <div className="btns-area">
                            <button className="btn btn-info btn-sm pull-right" onClick={this.directToTargetSite(this.props.goods.buyUrl)}>到购物网站</button>
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
        /*
        let result = [], temp = [];
        goodsList.forEach(function(item){
            if (temp.length >= 2) {
                result.push(temp);
                temp = [];
            }
            temp.push(item);
        });
        */

        return (
            <div>
                {
                    goodsList.map(function(goods) {
                        return <Goods goods={goods} />
                    })
                }
            </div>
        );
    }

});

module.exports = GoodsList;
