import React, { Component } from 'react';
import CategoriesButton from '../CategoriesButton/index';
import { connect } from 'react-redux';

class Categories extends Component {
    renderCategoriesButton =  () => {
        return this.props.categoriesList.map( (item,index) => {
            return <CategoriesButton item = {item} key = {index}/>
        })
    };
    render() {
        return (
            <div className =" mt-2 btn-group">
                {this.renderCategoriesButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categoriesList: state.categories,
});

export default connect(mapStateToProps)(Categories);

