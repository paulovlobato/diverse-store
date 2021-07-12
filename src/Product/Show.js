import React from "react";
import { withRouter } from 'react-router-dom'
import { products } from "./products";
import { AddProductToCart } from '../actions'
import {connect} from 'react-redux';
import { compose } from "redux";

class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pid: null,
            product: {},
        }
    }

    getProduct (id) {
        // HTTP GET
        return products.find( p => p.id === id )
    }

    componentDidMount() {
        const id = this.props.match.params.productId
        const product = this.getProduct(id)

        this.setState({
            pid: id,
            product: product 
        })
    }

    toCurrency(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    render() {
        const { product } = this.state

        return (
            <div>
                <h1>Show Product</h1>
                <p>Name: {product.name}</p>
                <p>
                    <img src = {product.image} style = {{ width:'100px',height:'80px' }} alt="" />
                </p>
                <p>Price: {this.toCurrency(product.price)}</p>
                <p><span className="badge badge-primary" style={{cursor:'pointer'}} onClick={ () => this.props.AddProductToCart(product)}>Add to Cart</span></p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { _products: state._todoProduct };
}

function mapDispatchToProps(dispatch) {
    return { AddProductToCart: product => dispatch(AddProductToCart(product)) }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Show)