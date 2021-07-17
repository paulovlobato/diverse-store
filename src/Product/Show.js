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
            <div className="container mx-auto px-6">
                <div className="md:flex md:items-center">
                    <div className="w-full h-64 md:w-1/2 lg:h-96">
                        <img src = {product.image} className="h-full w-full rounded-md object-cover max-w-lg mx-auto" alt="" />
                    </div>
                    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                        <h3 className="text-gray-700 uppercase text-lg">{product.name}</h3>
                        <span className="text-gray-500 mt-3">Price: {this.toCurrency(product.price)}</span>
                        <hr className="my-3"/>

                        {/* <div className="flex items-center mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus posuere dapibus. Morbi pharetra dapibus lacus eu elementum. Mauris a blandit nibh. Fusce et sagittis justo. Duis ultricies sit amet tortor quis feugiat. Nulla urna ex, pharetra eu risus consectetur, sagittis efficitur mi. Vivamus vitae dui gravida, volutpat neque non, auctor sapien. In hac habitasse platea dictumst. Ut mauris mauris, ornare vitae congue quis, lacinia vitae ipsum. Aliquam at consequat metus. Ut a quam posuere, tempus lorem sed, suscipit lacus. Quisque varius, eros a facilisis molestie, felis velit iaculis dolor, ac ornare mi nunc vel ipsum. Maecenas cursus erat et nulla dictum sagittis. Nam iaculis magna facilisis, pellentesque dui eu, aliquet massa. Vestibulum nec molestie eros. Nam aliquet aliquam dui eget facilisis.
                        </div> */}

                        <div className="flex items-center mt-6">
                            <span onClick={ () => this.props.AddProductToCart(product)} className="cursor-pointer px-8 py-2 bg-russian-violet text-white text-sm font-medium rounded hover:bg-dark-blue-gray focus:outline-none focus:bg-dark-blue-gray ">Add to cart</span>
                        </div>                        
                    </div>                        
                </div>
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