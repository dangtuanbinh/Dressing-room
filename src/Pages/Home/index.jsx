import React, { Component } from 'react';
import Header from '../../Components/Header/index';
import Body from '../../Components/Body/index';
import Footer from '../../Components/Footer/index';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
