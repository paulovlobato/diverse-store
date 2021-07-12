// import React, { Component } from 'react'
import { connect } from "react-redux";
import {
    AddQuantity,
    SubQuantity,
    ResetItemQuantity
} from  '../actions';

function ShoppingCart({
    items,
    AddQuantity,
    SubQuantity,
    ResetItemQuantity
}){

    let _productsList = [];
    let _totalProducts = 0;

    Object.keys(items.products).forEach(function(item){
        _totalProducts += items.products[item].quantity * items.products[item].price;
        _productsList.push(items.products[item]);
    });    
    
    return(
        <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    _productsList.map((item,key)=>{
                        return(
                            <tr key={key}>    
                            <td>
                                <i style={{cursor:'pointer'}} onClick={ () => ResetItemQuantity(key) }> X </i>
                            </td>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{width:'100px',height:'80px'}} alt = ""/></td>
                            <td>R$ {item.price}</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px', cursor: 'pointer'}} onClick={()=>SubQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-primary" style={{margin:'2px', cursor: 'pointer'}} onClick={()=>AddQuantity(key)}>+</span>
                            </td>
                            <td> R${ getTotalPricePerProduct(item.price, item.quantity)}</td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="5">Total products</td>
                    <td>R$ {Number(_totalProducts).toLocaleString('pt-BR')}</td>
                </tr>
                </tbody>
              
            </table>
            </div>
        </div>
    )

    function getTotalPricePerProduct(price, amount) {
        console.info(price, amount)
        return Number(price * amount).toLocaleString('pt-BR');
    }
}

const mapStateToProps = state =>{
//    console.info(state)
    return { items: state._todoProduct }
}

export default connect(
    mapStateToProps, {
        AddQuantity,
        SubQuantity,
        ResetItemQuantity
    }) (ShoppingCart)
