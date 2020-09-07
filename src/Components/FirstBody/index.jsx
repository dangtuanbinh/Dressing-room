import React, { Component } from 'react';
import Categories from '../Categories/index';
import Products from '../Products/index';

export default class FirstBody extends Component {
    render() {
        return (
            <div className = 'col-6'>
                <Categories />
                <Products />
            </div>
        )
    }
}
