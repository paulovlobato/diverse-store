import React from "react";
// import { products } from "./products";
import { Link, withRouter} from 'react-router-dom'
import { AddProductToCart } from '../actions'
import {connect} from 'react-redux';
import { compose } from "redux";

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            loaded: false,
            products: []
        };
    }

    async fetchProducts() {
        const URL = 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'

        await fetch(URL)
        .then(this.sleeper(3000))
        .then(res => res.json())
        .then(products => {
            this.setState( {
                loaded: true,
                products: products
            } )
        })
        
        // this.setState({
        //     loaded: true,
        //     products: products
        // })

    }

    sleeper(ms) {
        return function(x) {
            return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
    }

    async componentDidMount() {
        this.fetchProducts()
        // console.info(this.paginate(products, 10, 1))
    }

    paginate(products, pageSize, pageNumber) {
        return products.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    }

    render(){
        const { error, loaded, products } = this.state
        if (error) {
            return <div>Error: {error}</div>
        } else if (!loaded) {
            // todo add spinner
            return (<div>
                <div class="grid grid-cols-12">
                    <div class="col-start-2 col-span-10 mt-16 flex items-center justify-center h-screen">
                        <span class="spinner inline-block"></span>
                    </div>
                </div>
            </div>)
        } else {
            // todo move to a stateless component
            return (
                // todo add offset to not show all items
                <div>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {products.map(item => (
                            <div key={item.id} className="shadow-lg rounded-lg">
                                <div className="p-5">    
                                    <div> <img className="" src={item.image} alt=""/> </div>
                                    <h3 class="text-gray-700 uppercase text-lg"> {item.name} </h3>
                                    <div className="flex flex-col xl:flex-row justify-between">
                                        <span onClick={ () => this.props.AddProductToCart(item)} className="cursor-pointer bg-gradient-to-r from-russian-violet to-dark-blue-gray rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-russian-violet hover:from-russian-violet hover:to-russian-violet flex flex-row justify-center">
                                            Add to cart
                                        </span>
                                        <Link className="bg-middle-blue-green rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-steel-teal flex flex-row justify-center" to={`/product/show/${item.id}`}>
                                            Show details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

function mapDispatchToProps(dispatch) {
    return { AddProductToCart: product => dispatch(AddProductToCart(product)) }
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(List)