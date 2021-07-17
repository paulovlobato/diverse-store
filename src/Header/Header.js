import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="py-4 mb-6 lg:px-16 px-4 bg-middle-blue-green flex flex-wrap items-center"> {/** Header Menu */}
                <div className="sm:hidden md:inline-block flex-1 flex justify-between items-center text-">
                    <span className="text-xl text-white align-middle">
                        <Link to='/'>Diverse Store</Link>
                    </span>
                </div>

                <div className="lg:flex lg:items-center lg:w-auto w-full">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li> <Link className="font-medium mr-6" to='/product/list'>View Store Products</Link> </li>
                        <li> <Link className="font-medium" to='/cart'>Cart: {this.props.total} </Link> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { total: state._todoProduct.total }
}

export default connect(
    mapStateToProps, null
)(Header);