/**
 * navigation bar
 *
 * @author victor li
 * @date 2015/09/27
 */

'use strict'

const React = require('react');
const $ = require('jquery');

/**
 * items of dropdown list
 */
let DropdownItem = React.createClass({

    render: function() {
        return (
            <li key={this.props.dropdownItem.id} className="dropdown-item">
                <a href={this.props.dropdownItem.href}>{this.props.dropdownItem.name}</a>
            </li>
        );
    }

});

/**
 * items of navigation
 */
let NavItem = React.createClass({

    render: function() {

        const navItem = this.props.navItem;

        let navItemDom = (
            <li key={navItem.id}>
                <a href={navItem.href}>{navItem.name}</a>
            </li>
        );

        if (navItem.dropdown) {
            navItemDom = (
                <li key={navItem.id}>
                    <a href="javascript:;">{navItem.name}</a>
                    <div className="dropdown-list hidden">
                        <ul className="list-unstyled">
                            {
                                navItem.dropdown.map(function(dropdownItem) {
                                    return <DropdownItem dropdownItem={dropdownItem} />
                                })
                            }
                        </ul>
                    </div>
                </li>
            );
        }

        return navItemDom;

    }

});

/**
 * right navigtion
 */
let RightNav = React.createClass({

    render: function() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="#">登录</a>
                </li>
            </ul>
        );
    }

});

/**
 * navigation bar
 */
let NavBar = React.createClass({

    render: function() {

        return (
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    {
                        this.props.navs.map(function(_nav) {
                            return <NavItem navItem={_nav} />
                        })
                    }
                </ul>
                <RightNav />
            </div>
        );

    }
});

module.exports = NavBar;

