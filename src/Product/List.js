import React from "react";
// import { products } from "./products";
import { Link } from 'react-router-dom'

export default class List extends React.Component {
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
            return <div>Loading...</div>
        } else {
            // todo move to a stateless component
            return (
                // todo add offset to not show all items
                <ul>
                    {products.map(item => (
                        <li key={item.id}>
                        <Link to={`/product/show/${item.id}`}>
                            {item.id} {item.name}
                        </Link>
                            {/* {item.id} {item.name} */}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}